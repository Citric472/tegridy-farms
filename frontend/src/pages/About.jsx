import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="py-16 px-6 container mx-auto max-w-4xl">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-900">
        About Tegridy Farms 🌿
      </h1>

      {/* Section 1 — Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-12"
      >
        <img
          src="src/assets/cannabis-farm.jpg"
          alt="Cannabis Farm"
          className="rounded-xl mb-6"
        />

        <h2 className="text-3xl font-bold mb-4 text-green-800">Our Story</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tegridy Farms was founded on one mission — to grow good weed with good
          intentions. Based in the heart of South Park, Colorado, we pride
          ourselves on authenticity, sustainability, and high-quality products.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every bud, every leaf, and every product is handled with care and
          precision. We believe weed should be natural, honest, and full of
          Tegridy.
        </p>
      </motion.div>

      {/* Section 2 — Values */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-green-800">Our Values</h2>

        <img
          src="src/assets/close-up.jpg"
          alt="Cannabis Close-up"
          className="rounded-xl mb-6"
        />

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-2xl">🌿</span>
            <div>
              <strong>Quality First</strong>
              <p className="text-gray-600">Only premium weed, grown with love and care.</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <strong>Sustainable Farming</strong>
              <p className="text-gray-600">Eco-friendly growing methods, always.</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-2xl">🤝</span>
            <div>
              <strong>Community Love</strong>
              <p className="text-gray-600">
                We support local growers and small businesses.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-2xl">💚</span>
            <div>
              <strong>Tegridy</strong>
              <p className="text-gray-600">
                Doing the right thing — even when no one's watching.
              </p>
            </div>
          </li>
        </ul>
      </motion.div>

      {/* Final Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center p-8 bg-green-100 rounded-xl border border-green-300"
      >
        <img
          src="src/assets/randy.webp"
          alt="Cannabis Leaf Art"
          className="rounded-xl mb-6 mx-auto w-full max-w-xl"
        />

        <p className="text-xl font-semibold text-green-900">
          "It’s not about the money… It’s about having Tegridy."
        </p>
      </motion.div>
    </div>
  );
}
