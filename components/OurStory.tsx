'use client';

import React from 'react';
import { FaCheck } from 'react-icons/fa';

const OurStory = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="about" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <img
              src="https://images.unsplash.com/photo-1554446422-d05db23719d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt="Studio Microphone"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-bold text-[#9d6b53] mb-4">Our Story</h3>
            <div className="w-20 h-1 bg-amber-800 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Founded in 1985 by architectural historians Edward and Margaret Vestvale, our company began with a simple mission:
              to preserve and celebrate the craftsmanship of bygone eras while adapting these treasures for contemporary living.
            </p>
            <p className="text-gray-700 mb-6">
              Today, under the leadership of their daughter, Amelia Vestvale-Carrington, we've expanded our offerings to include not
              just period properties but the essential furnishings that bring them to life. Each piece we acquire or create tells a story
              of heritage, quality, and enduring beauty.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <FaCheck className="text-amber-800 mt-1 mr-3" />
                <span className="text-gray-700">Over 200 historic properties restored and sold</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-amber-800 mt-1 mr-3" />
                <span className="text-gray-700">Original craftsmen workshops in England and France</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-amber-800 mt-1 mr-3" />
                <span className="text-gray-700">Recipient of the Royal Institute of British Architects Conservation Award</span>
              </li>
            </ul>
            <button className="bg-[#9d6b53] hover:bg-amber-900 text-white px-6 py-3 rounded font-medium transition">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

OurStory.displayName = 'OurStory';

export default OurStory;
