import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartProvider';

export default function CartList() {
  const { cart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="flex items-center gap-2 text-xl font-bold mb-4 text-gray-800"><FaShoppingCart/>Cart Items</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 italic">Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-2 text-gray-700"
            >
              <span>{item.name}</span>
              <span className="font-semibold">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
