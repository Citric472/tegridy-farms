export default function ProductTabs({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {["all", "cannabis", "accessory"].map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            filter === tab
              ? "bg-green-900 text-white"
              : "bg-white text-green-900 border border-green-900 hover:bg-green-900 hover:text-white"
          }`}
        >
          {tab === "all"
            ? "All"
            : tab === "cannabis"
            ? "Cannabis"
            : "Accessories"}
        </button>
      ))}
    </div>
  );
}
