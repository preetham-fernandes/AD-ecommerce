"use client";

import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = [
  { name: "Royal Red", value: "#B91C1C" },
  { name: "Emerald Green", value: "#047857" },
  { name: "Royal Blue", value: "#1E40AF" },
  { name: "Purple Wine", value: "#6B21A8" },
  { name: "Golden", value: "#B45309" },
];

export function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="sticky top-24">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-4">
        <a href="/home" className="text-gray-500 hover:text-black">Home</a>
        <span className="text-gray-500">/</span>
        <a href="/women" className="text-gray-500 hover:text-black">Women</a>
        <span className="text-gray-500">/</span>
        <a href="/women/lehenga" className="text-gray-500 hover:text-black">Lehenga</a>
      </nav>

      {/* Title and Rating */}
      <h1 className="text-3xl font-semibold mb-2">Bridal Collection Lehenga</h1>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {[1, 2, 3, 4].map((star) => (
            <span key={star} className="text-black">★</span>
          ))}
          <span className="text-gray-300">★</span>
        </div>
        <span className="text-gray-500">(207)</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-2xl font-semibold">₹24,999</span>
        <span className="text-green-600">Free Shipping</span>
      </div>

      {/* Color Selection */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">SELECT COLOR:</h2>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-12 h-12 rounded-full border-2 ${
                selectedColor === color.name
                  ? "border-black"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.name)}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">SELECT SIZE:</h2>
          <button className="text-sm underline">See Size Chart</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`py-3 border ${
                selectedSize === size
                  ? "border-black bg-black text-white"
                  : "border-gray-300 hover:border-black"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors mb-4">
        ADD TO CART
      </button>

      {/* Product Description */}
      <div className="prose prose-sm">
        <p className="text-gray-600">
          Exquisite bridal lehenga featuring intricate handcrafted embroidery with zari and sequin work. 
          Comes with a matching blouse and dupatta. Perfect for wedding ceremonies and special occasions.
        </p>
      </div>
    </div>
  );
}