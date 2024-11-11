import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { Layout } from "../components/Layout";
import { AccountDetails } from "../pages/Account/AccountDetails";
import { AccountOrders } from "../pages/Orders/AccountOrders";
import { Register } from "../pages/Register/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountDetails />} />
        <Route path="/account/orders" element={<AccountOrders />} />
        <Route path="/account/orders/:id" element={""} />
        <Route path="/account/dashboard" element={""} />
        <Route path="/account/address" element={""} />
      </Route>
    </Routes>
  );
}
