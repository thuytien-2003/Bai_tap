import { useContext, useEffect, useState } from "react";
import AuthContext from "../context";
import { getTasks, deleteTask } from "../services";
import type { Task } from "../types";
import { useNavigate } from "react-router";
import SearchTasks from "../components/SearchTasks";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

// Helper: Trả về class màu sắc cho status
const getStatusColor = (status: string) => {
  switch (status) {
    case "to_do":
      return "bg-indigo-100 text-indigo-700";
    case "in_progress":
      return "bg-pink-100 text-pink-700";
    case "done":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

// Helper: Trả về class màu sắc cho priority
const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "low":
      return "bg-indigo-100 text-indigo-700";
    case "medium":
      return "bg-pink-200 text-pink-800";
    case "high":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function OurTasksPage() {
  useContext(AuthContext);
  const navigate = useNavigate();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<{
    status?: string;
    priority?: string;
  }>({
    status: "",
    priority: "",
  });

  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleOnEdit = (taskId: number) => {
    navigate(`/update-task/${taskId}`);
  };

  const handleDelete = async (taskId: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  const handleOnSearch = (filters: { status?: string; priority?: string }) => {
    setFilters(filters);
  };

  const filteredTasks = tasks.filter((task: Task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });

  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md max-w-7xl mx-auto">
      <SearchTasks onSearch={handleOnSearch} />

      <div className="mt-6 overflow-x-auto rounded-md border border-pink-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-pink-100 text-xs text-pink-800 uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Due Date</th>
              <th className="px-4 py-3">Assignee</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-pink-100 bg-white">
            {filteredTasks.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-6 text-center text-pink-400 italic"
                >
                  No tasks found.
                </td>
              </tr>
            ) : (
              filteredTasks.map((task: Task) => (
                <tr
                  key={task.id}
                  className="hover:bg-pink-50 transition-colors duration-150"
                >
                  <td className="px-4 py-3">{task.id}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">
                    {task.title}
                  </td>
                  <td className="px-4 py-3">{task.description}</td>

                  <td className="px-4 py-3 capitalize">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        task.status
                      )}`}
                    >
                      {task.status.replace(/_/g, " ")}
                    </span>
                  </td>

                  <td className="px-4 py-3 capitalize">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    {task.due_date
                      ? new Date(task.due_date).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-4 py-3">{task.assignee_id}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() =>
                          typeof task.id === "number" && handleOnEdit(task.id)
                        }
                        className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-pink-800 font-medium"
                      >
                        <FiEdit className="text-base" />
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          typeof task.id === "number" && handleDelete(task.id)
                        }
                        className="inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-700 font-medium"
                      >
                        <RiDeleteBin2Line className="text-base" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
