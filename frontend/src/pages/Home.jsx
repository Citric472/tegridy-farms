export default function Home() {
  return (
    <div className="min-h-screen text-white">

      {/* HERO SECTION */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/tegridy-farms.jpg')" }} 
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to Tegridy Farms 🌱
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Quality weed products grown with care and integrity.
          </p>
          <a
            href="/shop"
            className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-md text-white font-semibold"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-gradient-to-b from-green-900 to-green-950 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-green-800/50 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-white/80">
                Only the finest buds grown and selected with integrity.
              </p>
            </div>

            <div className="p-6 bg-green-800/50 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-white/80">
                Quick and discreet delivery right to your doorstep.
              </p>
            </div>

            <div className="p-6 bg-green-800/50 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-2">Top Shelf Strains</h3>
              <p className="text-white/80">
                Hand-selected strains for the best experience.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
