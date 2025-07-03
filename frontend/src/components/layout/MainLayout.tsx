import { Outlet } from "react-router-dom";

import Sidebar from "../ui/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
