/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: false }, // Tải tĩnh SSG
  });
  return res.json();
}

export default async function TaskSSGPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
      <div className="max-w-6xl w-full bg-white/90 p-10 rounded-3xl shadow-2xl border border-gray-200">
        <Link
          href="/"
          className="inline-block mb-6 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
        >
          ← Back to Home
        </Link>

        <h1 className="flex items-center gap-2 text-3xl font-extrabold mb-10 text-blue-600 text-center tracking-tight drop-shadow">
          <PiShoppingCartThin /> Product List (SSG)
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 20).map((product) => (
            <li
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-lg hover:shadow-2xl transition group relative"
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition"
              />
              <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description.substring(0, 80)}...
              </p>
              <span className="absolute top-5 right-5 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                ${product.price}
              </span>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={product.category.image}
                  alt={product.category.name}
                  className="w-7 h-7 rounded-full border"
                />
                <span className="text-gray-600 text-sm">
                  {product.category.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
