 //giả lập API
 export type Todo = {
     id: number;
     text: string;
 }; 

 const mockTodos: Todo[] = [
     { id: 1, text: "Học React" },
     { id: 2, text: "Học TypeScript" },
     { id: 3, text: "Học Vite" },
 ];

 // API giả: Lấy danh sách todos (mô phỏng từ server)
export function fetchTodos(): Promise<Todo[]> {
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve(mockTodos);
         }, 1000); // Giả lập thời gian trễ 1 giây
     });
 }