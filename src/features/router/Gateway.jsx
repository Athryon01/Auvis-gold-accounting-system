import { Route, Routes } from "react-router";
import Dashboard from "../dashboard/pages/Dashboard";
import InventoryPage from "../inventory/pages/Inventory";

function Gateway() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<InventoryPage />} />
    </Routes>
  );
}

export default Gateway;
