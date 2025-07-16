"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface AccessoriesCardProps {
  image: string;
  title: string;
  index: number;
  tag:string
}

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.7,
      ease: easeInOut,
    },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

export const AccessoriesCard: React.FC<AccessoriesCardProps> = ({
  image,
  title,
  index,
  tag
}) => {
  const router = useRouter();
  const slug = tag.toLowerCase().replace(/\s+/g, '');

  return (
    <motion.section
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
      onClick={() => router.push(`/accessories/${slug}`)}
    >
      <div className="relative overflow-hidden w-[100%] h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute w-full h-full rounded-md shadow-lg object-cover"
        />
      </div>
      <p className="font-medium text-start text-lg w-full my-2">{title}</p>
    </motion.section>
  );
};



export const  Accessories = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const theAccessories = [
    { image: "/image-05.svg", title: "Door Handles" ,tag:"door-handles"},
    { image: "/door.svg", title: "Doors" ,tag:"doors"},
    { image: "/lights.svg", title: "Lights" ,tag:"lights"},
    { image: "/wallpaper.svg", title: "Wallpapers",tag:"wallpapers" },
    { image: "/tiles.svg", title: "Tiles",tag:"tiles" },
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
      transition={{ duration: 0.8, ease: easeInOut }}
    >
<div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Home Accessories</h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        <p className="mt-4 max-w-2xl mx-auto">
        Complete your vintage home with our curated selection of classic home accessories
        </p>
      </div>
      {/* <div>
        <h2  className="text-center text-inter text-4xl font-medium max-w-2xl mx-auto text-white">Home Accessories</h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">Complete your vintage home with our curated selection of classic home accessories</p>
      </div> */}
      {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {theAccessories.map((accessory, index) => (
          <AccessoriesCard
            key={index}
            image={accessory.image}
            title={accessory.title}
            index={index}
            tag={accessory.tag}
          />
        ))}
      </div>
    </motion.section>
  );
});



// export const Accessories: React.FC = () => {
// };
