"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface CountryCardProps {
  name: string;
  image: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, image }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/country/${name.toLowerCase()}`)}
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
    >
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-4 text-white text-lg font-semibold uppercase tracking-wide">
        {name}
      </p>
    </div>
  );
};

export default CountryCard;

