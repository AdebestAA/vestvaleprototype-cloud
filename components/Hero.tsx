'use client';

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = React.forwardRef<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    className="bg-[#9d6b53] text-white py-20 md:py-32 bg-cover bg-center"
    style={{ backgroundImage: 'url(/your-hero-background.jpg)' }} // Optional if you have a background image
  >
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Timeless Homes, Modern Comfort
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        Discover vintage properties and classic home decor that tell a story
      </p>

      <div className="max-w-2xl mx-auto bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-2">
          <select className="flex-grow p-3 rounded bg-white bg-opacity-90 text-[#9d6b53] focus:outline-none">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Cottage</option>
          </select>
          <select className="flex-grow p-3 rounded bg-white bg-opacity-90 text-[#9d6b53] focus:outline-none">
            <option>Location</option>
            <option>New York</option>
            <option>Chicago</option>
            <option>San Francisco</option>
            <option>Boston</option>
          </select>
          <button className="bg-amber-800 hover:bg-amber-900 text-white p-3 rounded font-medium transition">
            <FaSearch className="inline-block mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
));

Hero.displayName = 'Hero';

export default Hero;
