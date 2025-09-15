import React, { useState } from "react";

export default function ProductCatalog() {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Pro Max",
      description:
        "6.7-inch Super Retina XDR display, Always-On display, ProMotion technology, Dynamic Island, A16 Bionic chip, 48MP main camera.",
      price: 1199,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946",
    },
    {
      id: 2,
      title: "iPhone 14",
      description:
        "6.1-inch Super Retina XDR display, Ceramic Shield, A15 Bionic chip with 5-core GPU, Advanced dual-camera system, Photonic Engine.",
      price: 799,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661027785646",
    },
    {
      id: 3,
      title: "iPhone 13",
      description:
        "6.1-inch Super Retina XDR display, A15 Bionic chip, Dual-camera system, 4K Dolby Vision HDR recording, 5G support.",
      price: 699,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-green-select-2022?wid=940&hei=1112&fmt=png-alpha&.v=1644969385505",
    },
    {
      id: 4,
      title: "iPhone SE (3rd Gen)",
      description:
        "4.7-inch Retina HD display, A15 Bionic chip, Touch ID, 12MP Wide camera, 5G connectivity, compact and affordable.",
      price: 429,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-midnight-select-202203?wid=940&hei=1112&fmt=png-alpha&.v=1646072737566",
    },
  ];

  const [search, setSearch] = useState("");

  // Filter products by search
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        📱 iPhone Product Catalog
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search iPhone models..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain mx-auto mb-4"
              />

              {/* Title */}
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>

              {/* Description */}
              <p className="text-sm text-gray-600 flex-grow">
                {product.description}
              </p>

              {/* Price + Button */}
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-green-600">
                  ${product.price}
                </span>
                <button className="bg-blue-600 text-white px-3 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                  🛒 Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No iPhones found.
          </p>
        )}
      </div>
    </div>
  );
}
import React from "react";
import ProductCatalog from "./ProductCatalog";

function App() {
  return <ProductCatalog />;
}

export default App;