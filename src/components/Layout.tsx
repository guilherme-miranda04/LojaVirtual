import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="bg-color-background h-screen w-screen overflow-hidden flex flex-row">
      <div className="flex w-full flex-col flex-1">
        <div className="flex flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
