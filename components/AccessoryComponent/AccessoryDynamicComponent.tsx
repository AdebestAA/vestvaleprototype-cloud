"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const AccessoryDynamicComponent = ({content}:any) => {
    const router = useRouter()
  return (
    <section className="w-full h-full bg-[#17120F] font-inter px-4 lg:px-0">
    <div className="w-full  md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
      <div className="space-y-6 mb-12 ">
        <h1 className="text-4xl md:text-3xl font-bold ">{content.title}</h1>
        <p className="font-normal text-white/80 ">{content.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {content.images.map((img:any, i:any) => {
          const src = typeof img === "string" ? img : img.image;

          const alt =
            typeof img === "string"
              ? `${content.title} ${i + 1}`
              : img.text || `${content.title} ${i + 1}`;
          return (
            <div
            onClick={()=> router.push("/vintage-light-demo")}
            key={i} className="">
       <div className="relative w-full h-[200px] overflow-hidden border border-white rounded-md">
       <Image
                src={src}
                alt={alt}
                fill
                // width={400}
                // height={500}
                className="absolute   object-contain rounded-lg shadow-md transition-transform hover:scale-101 ease-in-out duration-300"
              />
       </div>
              <p className="font-semibold text-xl capitalize md:text-xl text-white mt-4">
                {typeof img === "string" ? "" : img.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  )
}

export default AccessoryDynamicComponent