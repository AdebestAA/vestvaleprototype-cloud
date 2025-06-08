"use client";

import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#9d6b53] mb-2">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-[#9d6b53] mb-4">
              Our Offices
            </h3>
            <p className="text-gray-700 mb-6">
              Have questions about our properties or home decor items? Our team
              is here to help you find the perfect vintage solution for your
              needs.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-[#9d6b53]">
                    London Headquarters
                  </h4>
                  <p className="text-gray-600">
                    24 Bedford Square London WC1B 3HP United Kingdom
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-full mr-4">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-[#9d6b53]">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri: 9am-6pm</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 p-3 rounded-full mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-[#9d6b53]">Email Us</h4>
                  <p className="text-gray-600">info@vestvale.com</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-3 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-3 rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-3 rounded-full"
              >
                <FaPinterestP />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 bg-amber-50 p-6 rounded-lg shadow-sm"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#9d6b53] font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded border border-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#9d6b53] font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded border border-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-[#9d6b53] font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 rounded border border-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-800"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-[#9d6b53] font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded border border-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 rounded font-medium transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
