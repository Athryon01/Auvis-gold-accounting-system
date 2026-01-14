import Dashboard from "@/features/dashboard/pages/Dashbaord";
import { AlertDialogDemo } from "@/test/AlertDialogDemo";
import { Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";
import Golds from "../golds/pages/Golds";
import Coins from "../coins/pages/Coins";
import Commodities from "../commodities/pages/Commodities";
import Jewelries from "../jewelries/pages/Jewelries";
import Employees from "../employees/pages/Employees";

function Gateway() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/test" element={<AlertDialogDemo />} />
      <Route path="/golds" element={<Golds/>} />
      <Route path="/coins" element={<Coins/>} />
      <Route path="/commodities" element={<Commodities/>} />
      <Route path="/jewelries" element={<Jewelries/>} />
      <Route path="/employees" element={<Employees/>} />
    </Routes>
  );
}

export default Gateway;
