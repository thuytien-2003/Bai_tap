import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router";

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { path: "/patients", label: "Patients", icon: "👤" },
  { path: "/overview", label: "Overview", icon: "📊" },
  { path: "/map", label: "Map", icon: "🗺️" },
  { path: "/department", label: "Departments", icon: "🏥" },
  { path: "/doctors", label: "Doctors", icon: "👨‍⚕️" },
  { path: "/history", label: "History", icon: "🕘" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-4">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <FaPlus />
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
