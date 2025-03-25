"use client"
import React, { useState } from 'react';
import {
  Search,
  User,
  ShoppingBag,
  ChevronDown,
  Grid,
  List,
  Heart,
  Handshake,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Types
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type FilterState = {
  priceRange: [number, number];
  colors: string[];
  occasions: string[];
  styles: string[];
  fabrics: string[];
  workTypes: string[];
};

function App() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50000],
    colors: [],
    occasions: [],
    styles: [],
    fabrics: [],
    workTypes: []
  });

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Royal Maroon Silk Lehenga",
      description: "Handcrafted bridal lehenga with intricate zari work",
      price: 45000,
      image: "https://images.unsplash.com/photo-1585351650024-8e333a17aeff?auto=format&fit=crop&q=80&w=600"
    },
    // Add more products here...
  ];

  const recentlyViewed = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-maroon-800">Absolutely Desi</div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search lehengas..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              <button className="p-2 hover:text-maroon-600">
                <User className="w-5 h-5" />
              </button>
              <button className="bg-maroon-800 text-white px-4 py-2 rounded-lg hover:bg-maroon-700">
                Become an Affiliate
              </button>
            </div>
          </div>
        </div>
        
        {/* Category Banner */}
        <div className="relative h-48 bg-gradient-to-r from-maroon-800 to-maroon-600">
          <div className="container mx-auto px-4 h-full flex items-center">
            <h1 className="text-4xl font-bold text-white">Women's Lehengas</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({...filters, priceRange: [0, parseInt(e.target.value)]})}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {['red', 'pink', 'green', 'blue', 'gold'].map(color => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full border-2 ${
                        filters.colors.includes(color) ? 'border-black' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        const newColors = filters.colors.includes(color)
                          ? filters.colors.filter(c => c !== color)
                          : [...filters.colors, color];
                        setFilters({...filters, colors: newColors});
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Other Filters */}
              {[
                { title: 'Occasion', options: ['Wedding', 'Festival', 'Party', 'Casual'] },
                { title: 'Style', options: ['Traditional', 'Contemporary', 'Fusion'] },
                { title: 'Fabric', options: ['Silk', 'Cotton', 'Georgette', 'Velvet'] },
                { title: 'Work Type', options: ['Embroidery', 'Sequins', 'Zari', 'Printed'] }
              ].map(filter => (
                <div key={filter.title} className="mb-6">
                  <h3 className="text-sm font-medium mb-2">{filter.title}</h3>
                  <div className="space-y-2">
                    {filter.options.map(option => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sorting and View Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="price-low">Price: Low to High</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {products.map(product => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold">₹{product.price}</span>
                      <span className="text-sm text-maroon-600">Bulk discounts available</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-maroon-800 text-white py-2 rounded hover:bg-maroon-700">
                        Inquire Now
                      </button>
                      <button className="text-maroon-800 underline text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button className="p-2 border rounded hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded ${
                    page === 1 ? 'bg-maroon-800 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 border rounded hover:bg-gray-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-4 gap-6">
            {recentlyViewed.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
                  <span className="text-sm font-bold">₹{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Affiliate Button */}
      <button className="fixed right-6 bottom-6 bg-maroon-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-maroon-700 flex items-center space-x-2">
        <Handshake className="w-5 h-5" />
        <span>Become an Affiliate</span>
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Absolutely Desi brings you the finest collection of ethnic wear.</p>
            </div>
            {/* Add more footer content */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;