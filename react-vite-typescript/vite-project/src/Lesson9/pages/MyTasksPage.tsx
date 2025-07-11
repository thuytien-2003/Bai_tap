import { useContext, useEffect, useState } from "react";
import AuthContext from "../context";
import { getTasksByAssignee } from "../services";
import type { Task } from "../types";
import { useNavigate } from "react-router";
import { FiEdit } from "react-icons/fi";

const getStatusColor = (status: string) => {
  switch (status) {
    case "to_do":
      return "bg-purple-100 text-purple-800";
    case "in_progress":
      return "bg-yellow-100 text-yellow-800";
    case "done":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "low":
      return "bg-blue-100 text-blue-700";
    case "medium":
      return "bg-pink-100 text-pink-700";
    case "high":
      return "bg-red-100 text-red-700";
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

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-7xl mx-auto">
      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-blue-100 text-xs text-blue-800 uppercase tracking-wide">
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
                <td colSpan={8} className="px-4 py-6 text-center text-gray-400 italic">
                  No tasks found.
                </td>
              </tr>
            ) : (
              tasks.map((task: Task) => (
                <tr key={task.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-3">{task.id}</td>
                  <td className="px-4 py-3 font-semibold text-gray-800">{task.title}</td>
                  <td className="px-4 py-3">{task.description}</td>
                  <td className="px-4 py-3 capitalize">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(task.status)}`}>
                      {task.status.replace(/_/g, " ")}
                    </span>
                  </td>
                  <td className="px-4 py-3 capitalize">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {task.due_date ? new Date(task.due_date).toLocaleDateString() : "—"}
                  </td>
                  <td className="px-4 py-3">{task.assignee_id}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => {
                        if (typeof task.id === "number") {
                          handleEdit(task.id);
                        }
                      }}
                      className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <FiEdit className="text-base" />
                      Edit
                    </button>
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
