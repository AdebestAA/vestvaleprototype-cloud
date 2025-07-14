"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from "framer-motion";

const AccessoryDynamicComponent = ({content}:any) => {
    const router = useRouter()
  return (
    <section className="w-full h-full bg-[#17120F] font-inter px-4 lg:px-0">
    <div className="w-full  md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
      <div className="space-y-6 mb-12 ">
        <h1 className="text-4xl md:text-3xl font-bold ">{content.title}</h1>
        <p className="font-normal text-white/80 ">{content.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {content.images.map((img:any, i:any) => {
          const src = typeof img === "string" ? img : img.image;

          const alt =
            typeof img === "string"
              ? `${content.title} ${i + 1}`
              : img.text || `${content.title} ${i + 1}`;
          return (
    <motion.div
    initial={{ opacity: 0, x: Number(`${i % 2 == 0 ? 40 : -40}`)}}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    onClick={()=> router.push(`russia/1`)}
    key={i}
    >
    {/* // <div
    onClick={()=> router.push("door/1")}
    key={i} className=""> */}
    <div 
    className="relative w-full min-h-[300px] overflow-hidden "
    >
    <Image
    src={src}
    alt={alt}
    fill
    sizes='100vw'
    // className='w-auto h-auto'
    // width={400}
    // height={500}
    className="absolute object-cover rounded-lg shadow-md transition-transform hover:scale-105 ease-in-out duration-300"
    />
    </div>
    <p className="font-semibold text-xl capitalize md:text-xl text-white mt-4">
    {typeof img === "string" ? "" : img.text}
    </p>
    </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default AccessoryDynamicComponent