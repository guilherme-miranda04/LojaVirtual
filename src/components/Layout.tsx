import { Outlet } from "react-router-dom";
import { Header } from "../pages/HomePage/Header";

export function Layout() {
  return (
    <div className="bg-color-background h-screen w-screen overflow-hidden flex flex-row">
      <div className="flex w-full flex-col flex-1">
        <Header />
        <div className="flex flex-1 bg-woodsmoke-950 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
