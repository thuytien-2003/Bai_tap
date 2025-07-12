import { useContext, useEffect, useState } from "react";
import AuthContext from "../context";
import { getTasksByAssignee, deleteTask } from "../services";
import type { Task } from "../types";
import { useNavigate } from "react-router";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";

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

export default function MyTasksPage() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      if (!user) return;
      try {
        const tasks = await getTasksByAssignee(user.id);
        setTasks(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [user]);

  const handleEdit = (id: number) => {
    navigate(`/update-task/${id}`);
  };
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
      alert("Error deleting task. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-indigo-50 rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-600">
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
          <tbody className="divide-y divide-gray-100 bg-white">
            {tasks.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-6 text-center text-gray-400 italic"
                >
                  No tasks found.
                </td>
              </tr>
            ) : (
              tasks.map((task: Task) => (
                <tr
                  key={task.id}
                  className="hover:bg-gray-50 transition-colors duration-150"
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
                        onClick={() => {
                          if (typeof task.id === "number") handleEdit(task.id);
                        }}
                        className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-blue-800 font-medium"
                      >
                        <FiEdit className="text-base" />
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          if (typeof task.id === "number")
                            handleDelete(task.id);
                        }}
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
