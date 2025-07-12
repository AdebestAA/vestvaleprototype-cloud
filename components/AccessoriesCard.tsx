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
    
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105 "
       onClick={() => router.push(`/accessories/${slug}`)}
    >
      <div className="relative overflow-hidden w-[100%] h-[200px]">
      <Image src={image} alt={title} fill className="absolute w-full h-full rounded-md shadow-lg object-cover"/>
      </div>
      <p className="font-medium text-start text-lg w-full my-2">{title}</p>
    </section>
  );
};



export const  Accessories = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const theAccessories = [
    { image: "/image-05.svg", title: "Door Handle" },
    { image: "/door.svg", title: "Door" },
    { image: "/lights.svg", title: "Lights" },
    { image: "/wallpaper.svg", title: "Wallpaper" },
  ];
  return (
    <section
    ref={ref}
    id="homeAccessories"
    className="w-full md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter px-4 lg:px-0">

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
});



// export const Accessories: React.FC = () => {
  
// };
