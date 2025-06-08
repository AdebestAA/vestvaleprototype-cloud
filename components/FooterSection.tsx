'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYelp, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <footer className="bg-[#9d6b53] text-white py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <FaHome className="text-2xl text-amber-300 mr-2" />
              <span className="text-xl font-bold text-amber-300">Vestvale</span>
            </div>
            <p className="text-amber-100 mb-4">
              Preserving the past, building the future. Vestvale specializes in historic properties and period-appropriate decor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-amber-100 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-amber-100 hover:text-white"><FaPinterestP /></a>
              <a href="#" className="text-amber-100 hover:text-white"><FaYelp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-amber-100 hover:text-white">Home</a></li>
              <li><a href="#properties" className="text-amber-100 hover:text-white">Properties</a></li>
              <li><a href="#appliances" className="text-amber-100 hover:text-white">Home Decor</a></li>
              <li><a href="#about" className="text-amber-100 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-amber-100 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h3 className="text-lg font-bold mb-4">Properties</h3>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-amber-100 hover:text-white">Apartments</a></li>
              <li><a href="#properties" className="text-amber-100 hover:text-white">Cottages</a></li>
              <li><a href="#properties" className="text-amber-100 hover:text-white">Brownstones</a></li>
              <li><a href="#properties" className="text-amber-100 hover:text-white">Historic Homes</a></li>
            </ul>
          </div>

          {/* Home Decor */}
          <div>
            <h3 className="text-lg font-bold mb-4">Home Decor</h3>
            <ul className="space-y-2">
              <li><a href="#appliances" className="text-amber-100 hover:text-white">Lighting</a></li>
              <li><a href="#appliances" className="text-amber-100 hover:text-white">Wallpaper</a></li>
              <li><a href="#appliances" className="text-amber-100 hover:text-white">Furniture</a></li>
              <li><a href="#appliances" className="text-amber-100 hover:text-white">Kitchenware</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 text-center text-sm text-amber-100">
          <p>&copy; {new Date().getFullYear()} Vestvale Homes & Decor. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
