import { NavLink } from "react-router";
import {
  Plus,
  User,
  BarChart,
  Map,
  Hospital,
  Stethoscope,
  History,
  Settings,
} from "lucide-react";
import type { JSX } from "react";

interface NavItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { path: "/patients", label: "Patients", icon: <User size={18} /> },
  { path: "/overview", label: "Overview", icon: <BarChart size={18} /> },
  { path: "/map", label: "Map", icon: <Map size={18} /> },
  { path: "/department", label: "Departments", icon: <Hospital size={18} /> },
  { path: "/doctors", label: "Doctors", icon: <Stethoscope size={18} /> },
  { path: "/history", label: "History", icon: <History size={18} /> },
  { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-4">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={16} />
        </button>
        <h1 className="text-xl font-bold">H-care</h1>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg transition-colors ${
                isActive
                  ? "border-l-4 border-blue-500 bg-blue-100 text-blue-700"
                  : "text-gray-700"
              }`
            }
            end={item.path === "/"}
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
