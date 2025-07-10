import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

interface IFormInput {
  status: string;
  priority: string;
}

type Props = {
  onSearch?: (filters: IFormInput) => void;
};

export default function SearchTasks({ onSearch }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      status: "",
      priority: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: IFormInput) => {
    if (onSearch && typeof onSearch === "function") {
      onSearch(data);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200 w-full max-w-4xl"
      >
        {/* Status */}
        {/* Status */}
        <div className="flex items-center w-full md:w-1/3 gap-2">
          <label
            htmlFor="status"
            className="text-sm font-medium text-gray-700 whitespace-nowrap"
          >
            Status
          </label>
          <select
            {...register("status")}
            id="status"
            name="status"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Statuses</option>
            <option value="to_do">To Do</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        {/* Priority */}
        {/* Priority */}
        <div className="flex items-center w-full md:w-1/3 gap-2">
          <label
            htmlFor="priority"
            className="text-sm font-medium text-gray-700 whitespace-nowrap"
          >
            Priority
          </label>
          <select
            {...register("priority")}
            id="priority"
            name="priority"
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="ml-auto mr-20">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition flex items-center gap-2"
          >
            <FiSearch className="text-lg" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
