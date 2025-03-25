"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);

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
      <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800 transition-colors mb-8">
        ENQUIRE NOW
      </button>

      {/* Product Details Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
        
        {/* Product Information Dropdown */}
        <div className="border-b">
          <button
            className="w-full py-4 flex justify-between items-center"
            onClick={() => setIsProductInfoOpen(!isProductInfoOpen)}
          >
            <h3 className="text-lg font-medium">Product Information</h3>
            {isProductInfoOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {isProductInfoOpen && (
            <div className="pb-4 text-gray-600">
              <p className="mb-2">
                Purple ruffled lehenga in georgette with a zip and draw string closure.
                Paired with a padded golden blouse in georgette with sequin embroidery.
              </p>
              <ul className="list-disc pl-5">
                <li>Material: Georgette</li>
                <li>Style: Traditional</li>
                <li>Occasion: Wedding, Festive</li>
                <li>Care Instructions: Dry clean only</li>
              </ul>
            </div>
          )}
        </div>

        {/* Reviews Dropdown */}
        <div className="border-b">
          <button
            className="w-full py-4 flex justify-between items-center"
            onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          >
            <h3 className="text-lg font-medium">Reviews</h3>
            {isReviewsOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {isReviewsOpen && (
            <div className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold">4.0</div>
                <div>
                  <div className="flex text-xl mb-1">
                    {[1, 2, 3, 4].map((star) => (
                      <span key={star} className="text-black">★</span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                  <div className="text-gray-500">Based on 207 reviews</div>
                </div>
              </div>
              
              {/* Rating Distribution */}
              <div className="space-y-2 mb-4">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="w-3">{rating}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-black" 
                        style={{ 
                          width: `${rating === 4 ? '60%' : rating === 5 ? '20%' : rating === 3 ? '15%' : '5%'}` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Delivery & Returns Dropdown */}
        <div className="border-b">
          <button
            className="w-full py-4 flex justify-between items-center"
            onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}
          >
            <h3 className="text-lg font-medium">Delivery & Returns</h3>
            {isDeliveryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {isDeliveryOpen && (
            <div className="pb-4 text-gray-600">
              <div className="mb-4">
                <h4 className="font-medium text-black mb-2">Delivery Information</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Free standard delivery on all orders</li>
                  <li>Express delivery available (additional charges apply)</li>
                  <li>Estimated delivery time: 5-7 business days</li>
                  <li>Track your order through our order tracking system</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-black mb-2">Returns Policy</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Easy 30-day return policy</li>
                  <li>Items must be unworn with original tags attached</li>
                  <li>Free returns on all orders</li>
                  <li>Customized items are non-returnable</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}