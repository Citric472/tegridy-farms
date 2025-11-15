import { useCart } from "../context/CartContext";

export default function CartSidebar({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-4">Your Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600 flex-grow">No items in cart.</p>
        ) : (
          <div className="flex-grow overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="mb-4 border-b pb-2">
                <h3 className="font-semibold">{item.name}</h3>
                <p>
                  {item.price} x {item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm mt-1 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            Clear Cart
          </button>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
