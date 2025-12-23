
import { useNavigate } from "react-router";
import AdminShippingConfig from "../components/adminValueSetPage";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the tokens from localStorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    // Redirect the user to the home page
    navigate("/");
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
        <div className="text-2xl font-bold">
          Ship-Simple.Com
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </nav>

      {/* Admin Content */}
      <div className="p-8 max-w-6xl mx-auto bg-gray-50 min-h-screen">
        <AdminShippingConfig />
      </div>
    </div>
  );
};

export default Admin;
