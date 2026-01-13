import Dashboard from "@/features/dashboard/pages/Dashbaord";
import { AlertDialogDemo } from "@/test/AlertDialogDemo";
import { Route, Routes } from "react-router";
import LoginPage from "../auth/pages/LoginPage";

function Gateway() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/test" element={<AlertDialogDemo />} />
    </Routes>
  );
}

export default Gateway;
