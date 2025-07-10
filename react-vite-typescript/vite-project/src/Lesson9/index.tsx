import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router"; // sửa react-router-dom
import LoginPage from "./pages/LoginPage";
import OurTasksPage from "./pages/OurTasksPage";
import MyTasksPage from "./pages/MyTasksPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import UpdateTaskPage from "./pages/UpdateTaskPage";
import AccessDeniedPage from "./pages/AccessDeniedPage";
import AuthContext from "./context";
import type { User } from "./types";

function AppLayout({
  user,
  handleLogout,
}: {
  user: User | null;
  handleLogout: () => void;
}) {
  const location = useLocation();
  const hideNav = location.pathname === "/login" || location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-100">
      {!hideNav && (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* LEFT: Title + chào */}
            <div>
              <h1 className="text-xl font-bold text-blue-600">
                📝 Tasks Manager Guidelines
              </h1>
              {user && (
                <p className="text-gray-600 text-sm">
                  Hi, <span className="font-semibold">{user.email}</span>
                </p>
              )}
            </div>

            {/* RIGHT: Nav menu */}
            <nav className="flex items-center space-x-6">
              <NavLink
                to="/tasks"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-medium ${
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700"
                  }`
                }
              >
                Tasks
              </NavLink>
              <NavLink
                to="/assignee-me"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-medium ${
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700"
                  }`
                }
              >
                My Tasks
              </NavLink>
              <NavLink
                to="/create-task"
                className={({ isActive }) =>
                  `hover:text-blue-700 font-medium ${
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700"
                  }`
                }
              >
                Create Task
              </NavLink>
              {user && (
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        </header>
      )}

      {/* Main content */}
      <main className="pt-20 container mx-auto px-4 py-8">
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          {user && <Route path="/tasks" element={<OurTasksPage />} />}
          {user && <Route path="/assignee-me" element={<MyTasksPage />} />}
          {user && <Route path="/create-task" element={<CreateTaskPage />} />}
          {user && (
            <Route path="/update-task/:id" element={<UpdateTaskPage />} />
          )}
          <Route path="/*" element={<AccessDeniedPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function TasksManagementGuidelines() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <AppLayout user={user} handleLogout={handleLogout} />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
