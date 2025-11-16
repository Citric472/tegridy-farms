import { useState } from "react";
import CartSidebar from "./CartSidebar";
import { Link } from "react-router-dom";


export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="bg-green-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wide">Tegridy Farms 🌿</h1>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-green-300">Home</Link>
          <Link to="/shop" className="hover:text-green-300">Shop</Link>
          <Link to="/about" className="hover:text-green-300">About</Link>
          <Link to="/contact" className="hover:text-green-300">Contact</Link>
        </nav>
        <button
          onClick={() => setCartOpen(true)}
          className="ml-4 bg-yellow-400 text-green-900 px-3 py-1 rounded hover:bg-yellow-300"
        >
          Cart
        </button>
      </header>
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
