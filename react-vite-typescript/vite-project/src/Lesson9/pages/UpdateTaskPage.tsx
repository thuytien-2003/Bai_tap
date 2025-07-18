import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, type SubmitHandler } from "react-hook-form";
import { getTaskById, updateTask } from "../services";
import { useNavigate, useParams } from "react-router";

interface IFormInput {
  title: string;
  start_date: string;
  due_date?: string;
  description?: string;
  status: "to_do" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  assignee_id?: number | null;
}

const schema: yup.ObjectSchema<IFormInput> = yup.object({
  title: yup.string().required("Title is required").min(3).max(100),
  start_date: yup
    .string()
    .required("Start date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  due_date: yup
    .string()
    .optional()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date")
    .test(
      "due_date-after-start_date",
      "Due date must be after start date",
      function (value) {
        if (!value) return true;
        const { start_date } = this.parent;
        return new Date(value) >= new Date(start_date);
      }
    ),
  description: yup.string().optional().max(500),
  status: yup.mixed<"to_do" | "in_progress" | "done">().required(),
  priority: yup.mixed<"low" | "medium" | "high">().required(),
  assignee_id: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .nullable()
    .min(1, "Must be positive")
    .typeError("Must be a number"),
});

export default function UpdateTaskPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      start_date: "",
      due_date: "",
      description: "",
      status: "to_do",
      priority: "medium",
      assignee_id: null,
    },
    mode: "onChange",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const task = await getTaskById(id ? parseInt(id) : 0);
        reset({
          title: task.title,
          start_date: task.start_date?.split("T")[0] || "",
          due_date: task.due_date?.split("T")[0] || "",
          description: task.description || "",
          status: task.status,
          priority: task.priority,
          assignee_id: task.assignee_id ?? null,
        });
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [id, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const originalTask = await getTaskById(id ? parseInt(id) : 0);
      const taskData = {
        ...data,
        start_date: new Date(data.start_date),
        due_date: data.due_date ? new Date(data.due_date) : undefined,
        assignee_id: data.assignee_id ?? undefined,
        created_time: originalTask.created_time,
        updated_time: new Date(),
      };
      await updateTask(id ? parseInt(id) : 0, taskData);
      navigate("/tasks");
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6 text-gray-700 text-center">
        Update Task
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Start Date
            </label>
            <input
              {...register("start_date")}
              type="date"
              id="start_date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.start_date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.start_date.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="due_date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due Date
            </label>
            <input
              {...register("due_date")}
              type="date"
              id="due_date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            {errors.due_date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.due_date.message}
              </p>
            )}
          </div>
        </div>

        {/* Status & Priority */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              {...register("status")}
              id="status"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="to_do">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Priority
            </label>
            <select
              {...register("priority")}
              id="priority"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.priority && (
              <p className="text-red-500 text-sm mt-1">
                {errors.priority.message}
              </p>
            )}
          </div>
        </div>

        {/* Assignee ID */}
        <div>
          <label
            htmlFor="assignee_id"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Assignee ID
          </label>
          <input
            {...register("assignee_id")}
            type="number"
            id="assignee_id"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          {errors.assignee_id && (
            <p className="text-red-500 text-sm mt-1">
              {errors.assignee_id.message}
            </p>
          )}
        </div>

        {/* Submit + Cancel */}
        <div className="flex justify-center items-center gap-4">
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition"
          >
            Update Task
          </button>
          <button
            type="button"
            onClick={() => navigate("/tasks")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md text-sm font-semibold transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
