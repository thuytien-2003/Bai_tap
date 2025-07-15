import Link from "next/link";
import { GiTornado } from "react-icons/gi";

interface Product {
  id: number;
  title: string;
}

export default async function TaskISRListPage() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
      <div className="max-w-2xl w-full bg-white/90 p-10 rounded-3xl shadow-2xl border border-gray-200">
        <Link
          href="/"
          className="inline-block mb-6 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>

        <h1 className="flex items-center gap-2 text-3xl font-extrabold mb-10 text-blue-600 text-center tracking-tight drop-shadow">
          <GiTornado /> Products List (ISR)
        </h1>
        <div className="space-y-4">
          {products.slice(0, 20).map(({ id, title }) => (
            <Link
              key={id}
              href={`/task-isr/${id}`}
              className="block bg-white border border-gray-200 p-5 rounded-2xl shadow hover:shadow-lg transition font-medium text-gray-700 hover:bg-blue-50"
            >
              <span className="font-bold text-blue-500 mr-2">#{id}</span>
              <span className="align-middle">{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
