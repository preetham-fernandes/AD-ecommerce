"use client"
import React, { useState } from 'react';
import {
  Search,
  User,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail
} from 'lucide-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1583391733956-6c78dd16ea25?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1623002071765-5a769682bf59?auto=format&fit=crop&q=80&w=2000'
];

const categories = [
  { name: 'Lehengas', image: 'https://images.unsplash.com/photo-1595389908777-5c7b1b731fdf?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sarees', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Kurtas', image: 'https://images.unsplash.com/photo-1583391733956-6c78dd16ea25?auto=format&fit=crop&q=80&w=400' },
  { name: 'Gowns', image: 'https://images.unsplash.com/photo-1623002071765-5a769682bf59?auto=format&fit=crop&q=80&w=400' }
];

const newArrivals = [
  { name: 'Royal Blue Lehenga', price: '$599', image: 'https://images.unsplash.com/photo-1595389908777-5c7b1b731fdf?auto=format&fit=crop&q=80&w=400' },
  { name: 'Designer Silk Saree', price: '$299', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Embroidered Kurta Set', price: '$199', image: 'https://images.unsplash.com/photo-1583391733956-6c78dd16ea25?auto=format&fit=crop&q=80&w=400' },
  { name: 'Wedding Gown', price: '$799', image: 'https://images.unsplash.com/photo-1623002071765-5a769682bf59?auto=format&fit=crop&q=80&w=400' }
];

const testimonials = [
  { name: 'Priya Shah', role: 'Fashion Influencer', text: 'Partnering with Absolutely Desi has transformed my business. The quality and authenticity of their collection is unmatched.' },
  { name: 'Rahul Mehta', role: 'Boutique Owner', text: 'The affiliate program is straightforward and profitable. My customers love the exclusive designs.' },
  { name: 'Anjali Kapoor', role: 'Style Consultant', text: 'The catalog is extensive and the support team is always helpful. Best decision for my styling business.' }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-maroon-800">Absolutely Desi</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-maroon-600">Women</a>
            <a href="#" className="text-gray-700 hover:text-maroon-600">Men</a>
            <a href="#" className="text-gray-700 hover:text-maroon-600">Kids</a>
            <a href="#" className="text-gray-700 hover:text-maroon-600">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-maroon-600">Collections</a>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer" />
            <button className="bg-maroon-600 text-white px-4 py-2 rounded-md hover:bg-maroon-700">
              Become an Affiliate
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen mt-16">
        <div className="absolute inset-0">
          <img
            src={carouselImages[currentSlide]}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Authentic Indian Ethnic Wear
            </h1>
            <button className="bg-white text-maroon-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Register as an Affiliate', 'Browse & Download Catalog', 'Sell & Earn'].map((step, index) => (
              <div key={step} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-maroon-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{step}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <div key={product.name} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-maroon-600 font-bold mb-4">{product.price}</p>
                  <button className="w-full bg-maroon-600 text-white py-2 rounded hover:bg-maroon-700">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-maroon-600">{testimonial.role}</p>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-maroon-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Become an Affiliate Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of successful fashion entrepreneurs and start earning with authentic Indian ethnic wear.
          </p>
          <button className="bg-white text-maroon-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Register Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Absolutely Desi is your premier destination for authentic Indian ethnic wear affiliate marketing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full"
                />
                <button className="bg-maroon-600 px-4 py-2 rounded-r-md hover:bg-maroon-700">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Absolutely Desi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;