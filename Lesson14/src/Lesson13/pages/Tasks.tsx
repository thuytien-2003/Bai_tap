/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { apiClient } from '../libraries/api-client';
import { useAuthStore } from '../TasksManagementWithZustand/useAuthStore';
import { 
  FaCheckCircle, 
  FaClock, 
  FaSpinner, 
  FaCircle,
  FaFire,
  FaBolt,
  FaLeaf,
  FaEdit,
  FaTrash,
  FaPlus,
  FaSignOutAlt,
  FaTasks
} from 'react-icons/fa';

export default function Tasks() {
  const { logOut, loggedInUser } = useAuthStore((state) => state);
  const [tasks, setTasks] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.loggedInUser);
  const hasAdminRole = user?.roles.some((role) => role.name === 'Administrators');

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    }
  }, [loggedInUser, navigate]);

  const fetchTasks = async () => {
    try {
      const tasks = (await apiClient.get('/workspaces/tasks')) as any[];
      setTasks(tasks);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteTask = async (taskId: string) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    setLoading(true);
    try {
      await apiClient.delete(`/workspaces/tasks/${taskId}`);
      await fetchTasks();
      alert('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Failed to delete task');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheckCircle className="w-3 h-3" />;
      case 'in-progress': return <FaSpinner className="w-3 h-3" />;
      case 'pending': return <FaClock className="w-3 h-3" />;
      default: return <FaCircle className="w-3 h-3" />;
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <FaFire className="w-3 h-3" />;
      case 'medium': return <FaBolt className="w-3 h-3" />;
      case 'low': return <FaLeaf className="w-3 h-3" />;
      default: return <FaCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <FaTasks className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Task Management</h1>
          <p className="text-gray-600">Manage and track your tasks efficiently</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-sm text-gray-600">Total Tasks: </span>
              <span className="font-semibold text-gray-900">{tasks.length}</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            {hasAdminRole && (
              <button
                onClick={() => navigate('/create-task')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <FaPlus className="w-5 h-5" />
                <span>Create New Task</span>
              </button>
            )}
            <button
              onClick={() => logOut()}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <FaSignOutAlt className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tasks Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {tasks.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Priority</th>
                    {hasAdminRole && (
                      <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Actions</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tasks.map((task: any, index: number) => (
                    <tr 
                      key={task.id} 
                      className={`hover:bg-indigo-50 transition-all duration-200 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          #{task.id}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{task.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700 max-w-xs truncate" title={task.description}>
                          {task.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(task.status)}`}>
                          <span className="mr-2">{getStatusIcon(task.status)}</span>
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getPriorityColor(task.priority)}`}>
                          <span className="mr-2">{getPriorityIcon(task.priority)}</span>
                          {task.priority}
                        </span>
                      </td>
                      {hasAdminRole && (
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex gap-2">
                            <button
                              onClick={() => navigate(`/edit-task/${task.id}`)}
                              className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded-lg border border-blue-200 transition-colors duration-200 flex items-center space-x-1"
                            >
                              <FaEdit className="w-4 h-4" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              disabled={loading}
                              className="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg border border-red-200 transition-colors duration-200 disabled:opacity-50 flex items-center space-x-1"
                            >
                              <FaTrash className="w-4 h-4" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <FaTasks className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first task!</p>
              {hasAdminRole && (
                <button
                  onClick={() => navigate('/create-task')}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Create Your First Task
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Task Management System. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}