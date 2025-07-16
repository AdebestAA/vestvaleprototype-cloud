"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

interface CountryCardProps {
  name: string;
  image: string;
  text: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
      ease: easeInOut,
    },
  }),
};

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  image,
  text,
  index,
}) => {
  const router = useRouter();
  const slug = name.toLowerCase().replace(/\s+/g, "");

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
      onClick={() => router.push(`/country/${slug}`)}
    >
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="mt-4 text-white text-center text-lg font-semibold uppercase tracking-wide">
          {name}
        </h2>
        <p className="text-gray-200 text-sm mt-1">{text}</p>
      </div>
    </motion.div>
  );
};

const countries = [
  {
    name: "Russia",
    text: "Rooted in grandeur and artistic legacy, the Russian-inspired interiors at Vestvale Estate exude a sense of power and poise.",
    image: "/image-13.svg",
  },
  {
    name: "China",
    text: "Drawing from centuries of harmony, balance, and natural symbolism, our Chinese-style interiors bring serenity and flow into each home.",
    image: "/image-11.svg",
  },
  {
    name: "Italy",
    text: "A celebration of form, function, and finesse, the Italian-inspired interiors are marked by sleek design and architectural purity.",
    image: "/image-09.svg",
  },
  {
    name: "Morroco",
    text: "Step into a world of vibrant geometry and cultural soul. The Moroccan interiors of Vestvale Estate feature colorful mosaic tiles, arched doorways, and ",
    image: "/image-10.svg",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export const PropertiesSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="interiorDecor"
      className="w-full md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter px-4 lg:px-0"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: easeInOut }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Interior Decors</h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        <p className="mt-4 max-w-2xl mx-auto">
          Explore homes influenced by global architectural inspirations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {countries.map((country, index) => (
          <CountryCard
            key={country.name}
            name={country.name}
            image={country.image}
            text={country.text}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
});
