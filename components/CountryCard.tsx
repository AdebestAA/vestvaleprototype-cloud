"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CountryCardProps {
  name: string;
  image: string;
  text: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, image, text }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/country/${name.toLowerCase()}`)}
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
    >
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="mt-4 text-white text-lg font-semibold uppercase tracking-wide">
          {name}
        </h2>
        <p className="text-gray-200 text-sm mt-1"> {text} </p>
      </div>
    </div>
  );
};

export default CountryCard;
