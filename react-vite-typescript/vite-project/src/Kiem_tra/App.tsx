// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router'; // Sửa lại đúng là 'react-router-dom'
import BuyerForm from './Câu_1/BuyerForm';
import CartList from './Câu_2/CartList';
import ProductList from './Câu_2/ProductList';
import { CartProvider } from './Câu_2/CartProvider';
import { RiShoppingBag3Line } from 'react-icons/ri';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex gap-4 items-center">
            <h1 className="flex items-center gap-2 text-xl font-bold text-gray-800"><RiShoppingBag3Line />My Cart App</h1>
            <nav className="space-x-4">
              <Link to="/" className="text-blue-600 hover:underline">
                Home
              </Link>
              <Link to="/cart" className="text-blue-600 hover:underline">
                Cart
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route
              path="/cart"
              element={
                <div className="grid md:grid-cols-2 gap-6">
                  <CartList />
                  <BuyerForm />
                </div>
              }
            />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
