/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BsTicketDetailed } from "react-icons/bs";

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

export default function TaskISRPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
      <div className="max-w-md w-full bg-white/90 p-8 rounded-2xl shadow-2xl border border-gray-200">
        <Link
          href="/task-isr"
          className="inline-block mb-6 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
        >
          ← Back to List
        </Link>

        <h1 className="flex items-center gap-2 text-2xl font-extrabold mb-6 text-blue-600 text-center tracking-tight drop-shadow">
          <BsTicketDetailed /> Product Detail (Client)
        </h1>

        <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 hover:bg-gray-100 transition">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-48 object-cover rounded-xl mb-4 shadow"
          />
          <div className="mb-2 flex items-center gap-2">
            <img
              src={product.category.image}
              alt={product.category.name}
              className="w-7 h-7 rounded-full border"
            />
            <span className="text-gray-600 text-sm">{product.category.name}</span>
          </div>
          <p className="font-bold text-lg text-gray-800 mb-1">{product.title}</p>
          <span className="inline-block mb-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            ${product.price}
          </span>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        </div>
      </div>
    </main>
  );
}
