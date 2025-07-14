// nhận prop todo (bao gồm id, text) và hiển thị nội dung của nó.
type Props = {
    todo:{
        id: number;
        text: string;
    };
    onDelete: (id: number) => void; // Thêm prop onDelete để xóa todo
    onEdit:(id: number, text: string) => void; // Thêm prop onEdit để chỉnh sửa todo
};

export default function TodoItem({todo, onDelete, onEdit}: Props) {
  return (
    <li className="border px-3 p-2 rounded">
        {todo.text}
        <button onClick={() => onDelete(todo.id)} className="ml-2 text-red-500">
            Xóa
        </button>

        <button onClick={() => onEdit(todo.id, todo.text)} className="ml-2 text-blue-500">
            Sửa
        </button>
    </li>
  )
}