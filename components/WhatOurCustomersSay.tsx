"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const details = [
  {
    id: 1,
    imgProfile: "/man-one.svg",
    name: "Abu Mohammed",
    speech: "Got good and quality lights for my house from vestvale estate"
  },
  {
    id: 2,
    imgProfile: "/lady.svg",
    name: "Lara George",
    speech: "Had my Italian fittings from Vestvale, I recommend them."
  },
  {
    id: 3,
    imgProfile: "/man-two.svg",
    name: "Kenneth Daniel",
    speech:
      "Getting all my international door and wallpaper fittings for my house in Nigeria from Vestvale. They are a worthy partner."
  }
];

const WhatOurCustomersSay = () => {
  return (
    <div className="font-inter px-4 flex flex-col md:flex-row md:justify-between">
      <div className="py-2 w-full">
        <h1 className="text-center font-medium text-xl md:text-2xl lg:text-4xl">
          What Our Customers Say
        </h1>
      </div>

      <section className="w-full mt-6">
        {details.map((item, index) => {
          const ref = useRef(null);
          const inView = useInView(ref, { amount: 0.3, once: false });
          const controls = useAnimation();

          useEffect(() => {
            if (inView) controls.start("visible");
            else controls.start("hidden");
          }, [inView, controls]);

          const wrapperClasses =
            index === 0
              ? "md:w-[70%] lg:w-[60%] md:translate-x-[20%] lg:translate-x-[30%] bg-[#D3BD9E]"
              : index === 1
              ? "md:w-[70%] lg:w-[60%] md:translate-x-[4%] lg:translate-x-[8%] bg-[#372B25]"
              : "md:w-[70%] lg:w-[60%] md:translate-x-[40%] lg:translate-x-[60%] bg-[#898989]";

          return (
            <motion.div
              ref={ref}
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.3, duration: 0.6, ease: "easeOut" }
                }
              }}
              className={`${wrapperClasses} flex justify-end my-4`}
            >
              <aside className="flex items-center w-[96%] bg-white text-black justify-between gap-x-2 px-2 py-4">
                {/* Image */}
                <div className="w-[30%] h-full py-4 flex justify-center items-center">
                  <div className="relative w-[70px] h-[70px] overflow-hidden">
                    <Image
                      className="absolute object-cover rounded-full w-full h-full"
                      fill
                      src={item.imgProfile}
                      alt={item.name}
                    />
                  </div>
                </div>
                {/* Info */}
                <div className="w-[70%] text-sm px-1">
                  <h1 className="font-semibold">{item.name}</h1>
                  <p className="my-2">{item.speech}</p>
                </div>
              </aside>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default WhatOurCustomersSay;
