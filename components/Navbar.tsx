'use client';

import React, { useState } from 'react';
import { FaHome, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Properties', href: '#properties' },
    { label: 'Home Decor', href: '#appliances' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-[#e6ccb2] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <FaHome className="text-3xl text-[#9d6b53] mr-2" />
          <span className="text-2xl font-bold text-[#9d6b53]">Vestvale</span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#9d6b53] font-medium hover:text-amber-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-[#9d6b53] hover:text-amber-900">
            <FaHeart />
          </Link>
          <Link href="#" className="text-[#9d6b53] hover:text-amber-900">
            <FaShoppingCart />
          </Link>
          <button onClick={toggleMenu} className="md:hidden text-[#9d6b53] focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#9d6b53] text-white"
          >
            <div className="px-4 py-2 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 hover:bg-amber-900 px-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
