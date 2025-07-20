"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

interface AccessoriesCardProps {
  image: string;
  title: string;
  text?: string;
  index: number;
  tag: string;
}

const AccessoriesCard: React.FC<AccessoriesCardProps> = ({
  image,
  title,
  text,
  index,
  tag,
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
      onClick={() => router.push(`/accessories/${tag.toLowerCase()}`)}
    >
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full text-center mt-4">
        <h2 className="text-white text-lg font-semibold uppercase tracking-wide">
          {title}
        </h2>
        {text && <p className="text-gray-200 text-sm mt-1">{text}</p>}
      </div>
    </motion.div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export const Accessories = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const theAccessories = [
    {
      image: "/image-05.svg",
      title: "🚪 Door Handles",
      text: "Every touch counts. Vestvale’s door handles are crafted to blend luxury and function, adding a refined finish to your home’s entryways.",
      tag: "door-handles",
    },
    {
      image: "/door.svg",
      title: "🚻 Doors",
      text: "Step into sophistication — our custom-made doors are not just entrances, but statements of craftsmanship, security, and elegance.",
      tag: "doors",
    },
    {
      image: "/lights.svg",
      title: "💡 Lighting",
      text: "Vestvale Estate lighting designs blend warmth and grandeur, illuminating your home with timeless elegance and modern brilliance.",
      tag: "lights",
    },
    {
      image: "/wallpaper.svg",
      title: "🖼️ Wallpapers",
      text: "Every wall tells a story at Vestvale Estate – with handpicked wallpapers that combine Italian, Moroccan, and contemporary patterns to evoke character and class.",
      tag: "wallpapers",
    },
    {
      image: "/tiles.svg",
      title: "🧱 Tiles",
      text: "From Italian marble to premium ceramic finishes, Vestvale tiles bring luxury underfoot, combining beauty, strength, and effortless maintenance.",
      tag: "tiles",
    },
  ];

  return (
    <motion.section
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="homeAccessories"
      className="w-full md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter px-4 lg:px-0"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      transition={{ duration: 0.4, ease: easeInOut }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Home Accessories
        </h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        <p className="mt-4 max-w-2xl mx-auto">
          Complete your vintage home with our curated selection of classic home
          accessories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {theAccessories.map((item, index) => (
          <AccessoriesCard
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            tag={item.tag}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
});
