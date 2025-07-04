"use client";

import React from "react";
import { useParams } from "next/navigation";

const CountryGallery = () => {
  const { slug } = useParams();

  const countryContent: Record<string, { title: string; image: string }[]> = {
    russia: [
      { title: "Moscow Retreat", image: "/russia-1.jpg" },
      { title: "Winter Villa", image: "/russia-2.jpg" },
      { title: "Snowy Estate", image: "/russia-3.jpg" },
    ],
    china: [
      { title: "Beijing Courtyard", image: "/china-1.jpg" },
      { title: "Shanghai Loft", image: "/china-2.jpg" },
      { title: "Zen Garden House", image: "/china-3.jpg" },
    ],
    brazil: [
      { title: "Rio Retreat", image: "/brazil-1.jpg" },
      { title: "Amazon Hideaway", image: "/brazil-2.jpg" },
      { title: "Tropical Villa", image: "/brazil-3.jpg" },
    ],
    india: [
      { title: "Goa Bungalow", image: "/india-1.jpg" },
      { title: "Jaipur Palace", image: "/india-2.jpg" },
      { title: "Kerala Backwater Home", image: "/india-3.jpg" },
    ],
  };

  const cards = countryContent[slug as string] || [];

  return (
    <section className="w-full h-screen  mx-auto py-16 bg-[#17120F] text-white font-inter">
      <div className="w-10/12 mx-auto ">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10 capitalize text-center">
          {slug} Homes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-black/10 border border-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-white/80 mt-2">
                  Replace this text with content for {slug}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryGallery;
