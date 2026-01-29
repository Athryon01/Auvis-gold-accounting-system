import { Route, Routes } from "react-router";
import Dashboard from "../dashboard/pages/Dashboard";
import Inventory from "../inventory/pages/Inventory";
import Sales from "../sales/pages/Sales";
import WorkshopPage from "../workshop/pages/Workshop";

function Gateway() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/workshop" element={<WorkshopPage />} />
    </Routes>
  );
}

export default Gateway;
