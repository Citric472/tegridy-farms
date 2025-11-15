import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Tegridy OG Weed",
    price: "$45 / 8g",
    category: "weed",
    image: "/assets/weed1.jpg",
  },
  {
    id: 2,
    name: "Sativa Sunrise Weed",
    price: "$40 / 8g",
    category: "weed",
    image: "/assets/weed2.jpg",
  },
  {
    id: 3,
    name: "Rolling Papers Pack",
    price: "$8",
    category: "accessory",
    image: "/assets/rolling_papers.jpg",
  },
  {
    id: 4,
    name: "Tegridy Grinder",
    price: "$25",
    category: "accessory",
    image: "/assets/grinder.jpg",
  },
];

export default function Shop() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="py-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        Tegridy Farms Shop 🌿
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded border ${
            filter === "all"
              ? "bg-green-800 text-white"
              : "border-green-800 text-green-800"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("weed")}
          className={`px-4 py-2 rounded border ${
            filter === "weed"
              ? "bg-green-800 text-white"
              : "border-green-800 text-green-800"
          }`}
        >
          Weed
        </button>
        <button
          onClick={() => setFilter("accessory")}
          className={`px-4 py-2 rounded border ${
            filter === "accessory"
              ? "bg-green-800 text-white"
              : "border-green-800 text-green-800"
          }`}
        >
          Accessories
        </button>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="font-semibold text-lg text-gray-800">{product.name}</h2>
              <p className="text-green-700 font-bold mt-1">{product.price}</p>
              <p
                className={`text-xs font-semibold mt-2 inline-block px-2 py-1 rounded ${
                  product.category === "weed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {product.category === "weed" ? "Weed" : "Accessory"}
              </p>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-8">No products found.</p>
      )}
    </div>
  );
}
