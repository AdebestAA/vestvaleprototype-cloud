"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FooterSection = () => {
  return (
    <footer className="bg-[#D3BD9E] text-black py-12 sm:py-16 font-inter overflow-x-hidden px-4 lg:px-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo Centered Above */}
        <div className="">
          <Image
            src="https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771973/logo1_m5rvdz.png"
            alt="Vestvale logo"
            width={80}
            height={80}
          />
        </div>

        {/* <div className="flex items-center ">
          <Link href={"/"}><Image
            src="/logo-change.png"
            alt="Vestvale Logo"
            width={20}
            height={30}
            className="md:w-14 w-10"
            /></Link>
        </div> */}

        {/* Flex Grouped Sections */}
        <section className="flex lg:flex-row flex-col space-y-4 justify-between my-6">

{/* motion div */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left"
          >
            </motion.div> */}
          {/* Vestvale + Navigation */}
          <div className="flex-1">
            {/* <h2 className="text-2xl font-bold text-[#361B06]">Vestvale</h2> */}
            <ul className="space-y-4">
              {["About", "Service", "Virtual Tour"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Home accessorites */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#361B06]">Home Accessorites</h3>
            <ul className="mt-4 space-y-4">
              {["Door handles", "Wallpapers", "Lights","Doors","Tiles"].map((item) => (
                <li key={item}>
                  <a href="#properties" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interior Decoration */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold text-[#361B06]">Interior Decoration</h3>
            <ul className="space-y-4">
              {["Russia", "Italy", "China","Morocco"].map((item) => (
                <li key={item}>
                  <a href="#appliances" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Our Office */}
        <div className=" flex flex-col  ">

        <h3 className="text-lg font-bold text-[#361B06]">Our Offices</h3>

        <div className="mt-4 space-y-4">
          <p className="max-w-[60%]">123, Adeola Odeku street, Victoria Island. Lagos-State</p>
          <p>12, Jabi Abuja.</p>
        </div>






          {/* <div className="flex space-x-4">
            {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <ul className="flex space-x-6 text-sm">
            {["Privacy Policy", "Cookie Policy", "Security"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul> */}
        </div>

        <div className="flex flex-col">
<div className="flex space-x-4">
            {[
  { Icon: FaTwitter, href: "https://twitter.com/yourhandle" },
  { Icon: FaInstagram, href: "https://instagram.com/yourhandle" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/yourhandle" },
].map(({ Icon, href }, i) => (
  <a
    key={i}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    <Icon size={20} />
  </a>
))}

          </div>
          <ul className="flex flex-col space-y-4 text-sm mt-4">
  {[
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Security", href: "/security" },
  ].map((item) => (
    <li key={item.label}>
      <a href={item.href} target="_blank" className="hover:text-white transition-colors">
        {item.label}
      </a>
    </li>
  ))}
</ul>
</div>


        {/* Copyright */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t font-inter border-black pt-4 mt-8 text-center text-sm"
          >
          <p>&copy; {new Date().getFullYear()} Vestvale Homes & Decor. All rights reserved.</p>
        </motion.div> */}
          </section>
      </div>
    </footer>
  );
};

export default FooterSection;
