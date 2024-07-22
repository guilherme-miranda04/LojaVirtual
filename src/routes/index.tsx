import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<HomePage />}>
        <Route index element={""} />
        <Route path="/dashboard/reports" element={""} />
        <Route path="/dashboard/extract" element={""} />
        <Route path="/dashboard/goals" element={""} />
        <Route path="/dashboard/goals/details/:id" element={""} />
        <Route path="/dashboard/bankaccount" element={""} />
      </Route>
      <Route path="/register" element={""} />
    </Routes>
  );
}
