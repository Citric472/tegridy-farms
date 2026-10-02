import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(function () {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter(function (product) {
          return product.category === filter;
        });

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
        Tegridy Farms Shop
      </h1>

      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={function () {
            setFilter("all");
          }}
          className={`px-4 py-2 rounded border ${
            filter === "all"
              ? "bg-green-800 text-white"
              : "border-green-800 text-green-800"
          }`}
        >
          All
        </button>

        <button
          onClick={function () {
            setFilter("produce");
          }}
          className={`px-4 py-2 rounded border ${
            filter === "produce"
              ? "bg-green-800 text-white"
              : "border-green-800 text-green-800"
          }`}
        >
          Produce
        </button>

        <button
          onClick={function () {
            setFilter("accessory");
          }}
          className={`px-4 py-2 rounded border ${
            filter === "accessory"
              ? "bg-green-800 text-white"
              : "border-green-800 text-green-800"
          }`}
        >
          Accessories
        </button>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {filteredProducts.map(function (product) {
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg transition"
              >
                {product.image_url && (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

                <h2 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h2>

                <p className="text-green-700 font-bold mt-1">
                  ${Number(product.price).toFixed(2)}
                </p>

                <p className="text-xs font-semibold mt-2 inline-block px-2 py-1 rounded bg-green-100 text-green-800">
                  {product.category}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-8">
          No products found.
        </p>
      )}
    </div>
  );
}