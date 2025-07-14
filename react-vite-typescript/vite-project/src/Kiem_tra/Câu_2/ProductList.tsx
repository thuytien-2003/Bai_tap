import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartProvider";

const products = [
  { id: 1, name: "Product 1", price: 100     },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="flex items-center gap-2 text-2xl font-bold mb-6 text-gray-800"><FaShoppingCart/>Product List</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-md transition duration-200 flex flex-col items-start justify-between bg-white"
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
