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
    <div>
<h1 className='text-center'>What Our Customers Say</h1>

<section>
    {details.map((item,index)=>{

        return <div key={index}>
            <aside>
                {/* Image */}
                <div className='relative w-[100px] h-[100px]'>
                    <Image
                    className='absolute object-cover'
                    fill 
                    src={item.imgProfile} 
                    alt={item.name}
                     />

                </div>
                {/* Info */}
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.speech}</p>
                </div>
            </aside>
        </div>
    })}
</section>

    </div>
  )
}

export default WhatOurCustomersSay