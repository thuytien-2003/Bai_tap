import { useForm } from "react-hook-form";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { fetchTodos } from "../services/todoService";

type Todo = {
  id: number;
  text: string;
};

export default function Home() {
  const { theme, toggle } = useTheme();

  const { register, handleSubmit, reset } = useForm<{ text: string }>();

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  const onSubmit = (data: { text: string }) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: data.text,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    reset();
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id: number, currentText: string) => {
    setEditingId(id);
    setEditText(currentText);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <button
        onClick={toggle}
        className="px-3 py-1 bg-blue-500 text-white rounded my-4"
      >
        Toggle Theme: {theme}
      </button>

      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
        <input
          {...register("text", { required: true })}
          placeholder="Nhập việc cần làm"
          className="border border-gray-300 px-3 py-1 rounded"
        />

        <button
          type="submit"
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Thêm
        </button>
      </form>

      <ul className="space-y-4 mt-4">
        {todos.map((todo) =>
          editingId === todo.id ? (
            <li key={todo.id} className="flex gap-2">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border px-2 py-1 rounded"
              />
              <button
                onClick={() => {
                  setTodos((prev) =>
                    prev.map((t) =>
                      t.id === todo.id ? { ...t, text: editText } : t
                    )
                  );
                  setEditingId(null);
                  setEditText("");
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Lưu
              </button>
              <button
                onClick={() => {
                  setEditingId(null);
                  setEditText("");
                }}
                className="text-gray-500 px-2 py-1"
              >
                Hủy
              </button>
            </li>
          ) : (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )
        )}
      </ul>
    </div>
  );
}
