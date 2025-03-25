"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/lehenga-1.jpg",
  "/lehenga-2.jpg",
  "/lehenga-3.jpg",
  "/lehenga-4.jpg",
  "/lehenga-5.jpg",
  "/lehenga-6.jpg",
];

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnail Column */}
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-20 h-24 border-2 rounded-lg overflow-hidden ${
              selectedImage === index ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Product view ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative aspect-[3/4] rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Main product view"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}