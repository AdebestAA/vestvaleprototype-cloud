"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface AccessoriesCardProps {
  image: string;
  title: string;
}

export const AccessoriesCard: React.FC<AccessoriesCardProps> = ({
  image,
  title,
}) => {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/\s+/g, '');

  return (
    <section
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
       onClick={() => router.push(`/accessories/${slug}`)}
    >
      <div>
        <Image src={image} alt={title} width={100} height={100} className="w-full h-64 overflow-hidden rounded-lg shadow-lg"/>
      </div>
      <p>{title}</p>
    </section>
  );
};

export const Accessories: React.FC = () => {
  const theAccessories = [
    { image: "/image-05.svg", title: "Door Handle" },
    { image: "/door.svg", title: "Door" },
    { image: "/lights.svg", title: "Lights" },
    { image: "/wallpaper.svg", title: "Wallpaper" },
  ];
  return (
    <section className="w-full md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
      <div>
        <h2  className="text-center text-inter text-5xl font-medium max-w-2xl mx-auto text-white">Our Home Accessories</h2>
        <p className="text-center max-w-2xl mx-auto text-white/80 mb-12">Complete your vintage home with our curated selection of classic home accessories</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {theAccessories.map((accessory, index) => (
          <AccessoriesCard
            key={index}
            image={accessory.image}
            title={accessory.title}
          />
        ))}
      </div>
    </section>
  );
};
