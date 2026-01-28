import { Route, Routes } from "react-router";
import Dashboard from "../dashboard/pages/Dashboard";

function Gateway() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Gateway;
