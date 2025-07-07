import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const navItemStyle = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-lg ${
      isActive
        ? "bg-white text-blue-900 font-semibold"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col py-6 px-4">
      <h2 className="text-2xl font-bold mb-8">TaskMate</h2>
      <nav className="flex-1 space-y-2">
        <NavLink to="/admin/dashboard" className={navItemStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboard" className={navItemStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/todos" className={navItemStyle}>
          Todos
        </NavLink>
        <NavLink to="/profile" className={navItemStyle}>
          Profile
        </NavLink>
        <NavLink to="/admin/users" className={navItemStyle}>
          Users
        </NavLink>
      </nav>
      <button className="flex items-center gap-2 text-white mt-auto hover:text-red-300">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
