"use client";

import React from "react";
import CountryCard from "@/components/CountryCard";

const countries = [
  { name: "Russia", image: "/image-13.svg" },
  { name: "China", image: "/image-11.svg" },
  { name: "Brazil", image: "/image-09.svg" },
  { name: "India", image: "/image-10.svg" },
];

const PropertiesSection = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <section className="w-full md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Our Homes</h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        <p className="mt-4 max-w-2xl mx-auto">
          Explore homes influenced by global architectural inspirations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            image={country.image}
          />
        ))}
      </div>
    </section>
  );
});

export default PropertiesSection;