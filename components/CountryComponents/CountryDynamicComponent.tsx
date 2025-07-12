"use client"
import Image from 'next/image';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const CountryDynamicComponent = ({content,slug}:{content:any,slug:string}) => {
const router = useRouter()
//     const params = useParams()
//     const pathName = usePathname()


//     useEffect(()=>{
// console.log(params);
// console.log(pathName);
//     },[])
useEffect(()=>{
  console.log("content",content);
},[])

  return (
    <section className="w-full h-full bg-[#17120F] font-inter px-4 lg:px-0">
    <div className="w-full  md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
      <div className="space-y-6 mb-12 ">
        <h1 className="text-4xl md:text-5xl font-bold ">{content.title}</h1>
        <p className="font-normal text-white/80 ">{content.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center  ">
        {content.images.map((img:any, i:any) => {
          const src = typeof img === "string" ? img : img.image;

          const alt =
            typeof img === "string"
              ? `${content.title} ${i + 1}`
              : img.text || `${content.title} ${i + 1}`;
          return (
            <div key={i} 
            onClick={()=> router.push(`russia/1`)}
            >
              <Image
                src={src}
                alt={alt}
                width={400}
                height={500}
                className=" border-white  object-cover rounded-lg shadow-md transition-transform hover:scale-102 ease-in-out duration-300"
              />
              <p className="font-bold text-xl capitalize md:text-xl text-white mt-4">
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

export default CountryDynamicComponent