import { Route, Router, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import ShippingCalculator from "./pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout that wraps all routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<ShippingCalculator />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
