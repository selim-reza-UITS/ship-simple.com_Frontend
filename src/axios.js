// src/axios.js
import axios from "axios";

// Create Axios instance
const instance = axios.create({
  // baseURL: "http://127.0.0.1:9600/api/", // Your API base URL
  baseURL: "https://api.ship-simple.com/api/", // Your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to add Authorization header
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token"); // Get the access token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor to handle token expiration
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      // If token expired (401 error), try to refresh the token
      originalRequest._retry = true;

      // Get the refresh token
      const refreshToken = localStorage.getItem("refresh_token");

      // If there's no refresh token, redirect to login
      if (!refreshToken) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        // Request a new access token using the refresh token
        const response = await axios.post("token/refresh/", { refresh: refreshToken });

        // Store the new access token
        localStorage.setItem("access_token", response.data.access);

        // Retry the original request with the new access token
        originalRequest.headers["Authorization"] = `Bearer ${response.data.access}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // If refreshing token fails, redirect to login
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
