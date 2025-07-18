import Image from 'next/image'
import React, { forwardRef } from 'react'
import { motion } from "framer-motion";
const partnersImages: {id:number,src:string,name:string}[] = [
    {
        id:1,
        name:"lamppaper",
        src:"/idea-space.png"
    },
    {
        id:2,
        name:"idea space",
        src:"/lampnet.png"
    },
]
const OurPartners = forwardRef<HTMLElement,{}>((_,ref) => {
   
  return (
    <section className='pb-8 px-4 lg:px-0' ref={ref}>

<div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">Our Partners</h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
       
      </div>
{/* <h1 className='text-center md:text-[56px]  text-[35px] text-white'>Our Partners</h1> */}
<div className='flex justify-center md:gap-x-8 gap-x-4 px-4 md:px-0' >
{partnersImages.map((item,_)=>{

    return (
        <motion.div
        initial={{ opacity: 0, x: Number(`${item.id % 2 == 0 ? 40 : -40}`)}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        key={item.id}>

<Image 
src={item.src} 
alt={item.name}
width={200}
height={50}

/>

        </motion.div>
    )
})}
</div>


    </section>
  )
})

export default OurPartners
