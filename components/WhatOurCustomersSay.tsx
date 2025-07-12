import Image from 'next/image'
import React from 'react'
const details = [
    {
        id:1,
        imgProfile:"/man.png",
        name:"Abu Mohammed",
        speech:"Got good and quality lights for my house from vestvale estate"
    },
    {
        id:2,
        imgProfile:"/man.png",
        name:"Lara George",
        speech:"Had my itailian fittings from Vestvale, I recommend them."
    },
    {
        id:3,
        imgProfile:"/man.png",
        name:"Kenneth Daniel",
        speech:"Getting all my international door and wallpaper fittings for my house in Nigeria from Vestvale. They are a worthy partner. "
    },

]


const WhatOurCustomersSay = () => {

  return (
    <div className='px-4 flex flex-col md:flex-row md:justify-between'> 
    <div className='py-2'>
<h1 className='text-center font-medium text-xl md:text-2xl lg:text-4xl'>What Our Customers Say</h1>
    </div>

<section className=''>
    {details.map((item,index)=>{

        return <div key={index} className={`${index == 0 ? "md:w-[70%] lg:w-[60%]  md:translate-x-[20%] lg:translate-x-[30%] bg-[#D3BD9E]" : index == 1 ? "md:w-[70%] lg:w-[60%] md:translate-x-[4%] lg:translate-x-[8%] bg-[#372B25]" : "md:w-[70%] lg:w-[60%] md:translate-x-[40%] lg:translate-x-[60%] bg-[#898989]"}  flex justify-end my-4`}>
            <aside className='flex items-center w-[96%] bg-white text-black justify-between  gap-x-2 px-2 py-4'>
                {/* Image */}
                <div className='w-[30%] h-full py-4 flex justify-center items-center'>

                <div className='relative w-[70px] h-[70px] overflow-hidden'>
                    <Image
                    className='absolute object-cover rounded-full  w-full h-full'
                    fill 
                    src={item.imgProfile} 
                    alt={item.name}
                    />

                </div>
                    </div>
                {/* Info */}
                <div  className='w-[70%] text-sm px-1'>
                    <h1 className='font-semibold'>{item.name}</h1>
                    <p className='my-2'>{item.speech}</p>
                </div>
            </aside>
        </div>
    })}
</section>

    </div>
  )
}

export default WhatOurCustomersSay