"use client"

import React, { useState } from 'react';
import {
  Heart,
  Share2,
  ChevronRight,
  ZoomIn,
  Download,
  ShoppingCart,
  Star,
  StarHalf,
  Facebook,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';

// Product images from Unsplash (traditional Indian bridal wear)
const productImages = [
  "https://images.unsplash.com/photo-1595981234058-a9302fb97229?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1610123598195-eea6b6be4c48?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1612912116267-222686867710?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1585351650024-8e333a17aeff?auto=format&fit=crop&w=400&q=80"
];

const colorOptions = [
  { name: 'Royal Crimson', class: 'bg-red-800' },
  { name: 'Deep Purple', class: 'bg-purple-800' },
  { name: 'Navy Blue', class: 'bg-blue-900' },
  { name: 'Forest Green', class: 'bg-green-800' }
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

function App() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');
  const [isAffiliate] = useState(false); // In real app, this would come from auth state

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Simplified version */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-serif text-gray-900">Absolutely Desi</h1>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center space-x-1 text-sm text-gray-500">
        <a href="#" className="hover:text-gray-900">Home</a>
        <ChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-gray-900">Women</a>
        <ChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-gray-900">Lehengas</a>
        <ChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-gray-900">Bridal Collection</a>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">Royal Crimson Bridal Lehenga</span>
      </nav>

      {/* Main Product Section */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={productImages[selectedImage]}
                alt="Bridal Lehenga"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white">
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.slice(1).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx + 1)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === idx + 1 ? 'ring-2 ring-red-800' : ''
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif text-gray-900">Royal Crimson Bridal Lehenga</h1>
              <p className="text-sm text-gray-500 mt-1">SKU: BD2024RC001</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <StarHalf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm text-gray-500">(128 reviews)</span>
            </div>

            <div className="border-t border-b py-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">₹15,999</span>
                <span className="ml-2 text-sm text-gray-500">per piece</span>
              </div>
              
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">Bulk Pricing</h3>
                <table className="mt-2 w-full text-sm">
                  <tbody>
                    <tr className="border-t">
                      <td className="py-2">1-5 pieces</td>
                      <td className="text-right">₹15,999 each</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">6-10 pieces</td>
                      <td className="text-right">₹14,999 each</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-2">11+ pieces</td>
                      <td className="text-right">₹13,999 each</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Color & Size Selection */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex items-center space-x-3">
                  {colorOptions.map((color) => (
                    <button
                      key={color.name}
                      className={`w-8 h-8 rounded-full ${color.class} ring-2 ring-white shadow`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <select className="mt-2 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-red-800 focus:outline-none focus:ring-red-800">
                  <option value="">Select a size</option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {isAffiliate ? (
                <>
                  <button className="w-full bg-red-800 text-white py-3 px-8 rounded-md hover:bg-red-900 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                  <button className="w-full border border-gray-300 py-3 px-8 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Catalog</span>
                  </button>
                </>
              ) : (
                <button className="w-full bg-red-800 text-white py-3 px-8 rounded-md hover:bg-red-900">
                  Inquire Now
                </button>
              )}

              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
                  <Heart className="w-5 h-5" />
                  <span>Add to Wishlist</span>
                </button>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['description', 'specifications', 'shipping', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${selectedTab === tab
                      ? 'border-red-800 text-red-800'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <p>Introducing our Royal Crimson Bridal Lehenga, a masterpiece of traditional craftsmanship and contemporary design. This stunning ensemble features:</p>
                <ul>
                  <li>Intricately embroidered bodice with zari work</li>
                  <li>Full circular skirt with traditional motifs</li>
                  <li>Matching dupatta with elaborate border</li>
                  <li>Premium silk fabric with rich embellishments</li>
                </ul>
                <h3>Care Instructions</h3>
                <p>Dry clean only. Store in a cool, dry place. Handle embellishments with care.</p>
              </div>
            )}
          </div>
        </div>

        {/* Non-affiliate CTA */}
        {!isAffiliate && (
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-serif text-gray-900">Want to sell this product?</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Join our affiliate program to access wholesale prices, exclusive catalogs, and earn competitive commissions on every sale.
            </p>
            <button className="mt-6 bg-red-800 text-white py-3 px-8 rounded-md hover:bg-red-900">
              Become an Affiliate
            </button>
          </div>
        )}
      </main>

      {/* Footer - Simplified version */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-center text-gray-400">© 2024 Absolutely Desi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;