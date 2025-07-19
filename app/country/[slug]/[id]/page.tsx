

import Image from 'next/image'
import React from 'react'
import { countryPropertyData } from '../page';
import { allImagesForChineseDecor } from '@/app/utils/interior-utils/chinadecorPopUpProps';
import { allImagesForMoroccanDecor } from '@/app/utils/interior-utils/morroccodecorPopUpProps';
import { allImagesForItalianDecor } from '@/app/utils/interior-utils/italydecorPopUpProps';
import { allImagesForRussianDecor } from '@/app/utils/interior-utils/russiadecorPopUpProps';


// const data = [
//   { slug: 'russia', id: '1' },
//   { slug: 'italy', id: '2' },
//   { slug: 'china', id: '3' },
//   { slug: 'morroco', id: '4' },
// ];
// const images = [
//   {
//     id:1,
//     src:"/chair-one.png",
//     name:"chair one"
//   },
//   {
//     id:2,
//     src:"/chair-two.png",
//     name:"chair two"
//   },
// ]
// const characteristics: string[] = [
//  `
// Rich Colors: Deep reds, emerald greens, gold, royal blues.`,
// `Elaborate Patterns: Floral motifs, damasks, geometric designs.`,
// `Luxurious Textiles: Velvet, brocade, silk, fur accents.`,
// `Ornate Furniture: Carved wood, polished finishes.`,
// `Gilding & Crystal: Adding a touch of imperial sparkle.`,
// `Traditional Elements: Matryoshka dolls, Samovars (or representations).`
// ]

export default async function CountryInfo({
    params,
}: {
    params: Promise<{ slug: string; id: string }>;
}) {

    const {id,slug} = await params
    let content = null
    // console.log(await params);
if (slug == "china") {
   content = allImagesForChineseDecor.find(item => item.name == id)
  }
  else if(slug == "morocco"){
    
    content = allImagesForMoroccanDecor.find(item => item.name == id)
}
  else if(slug == "italy"){
    
    content = allImagesForItalianDecor.find(item => item.name == id)
}
  else if(slug == "russia"){
    
    content = allImagesForRussianDecor.find(item => item.name == id)
}
    
console.log(content);


if (!content) {
  return <div>content not available</div>
}
  return (
     <div
     // style={{background:""}}
     className='bg-[#F5F1E6] min-h-screen  text-black pb-8'
     >
 {/* Image Preview */}
 <div className='relative w-full h-[400px]'>
   <Image 
   fill
   className='absolute object-cover'
   src={content.src} alt={content.name} />
 </div>
 
 {/* name and request price */}
 <section className='flex justify-between items-center px-2 md:px-6 my-4'> 
   <h1 className='text-xl font-semibold capitalize'>{content.name}</h1>
   <div className='bg-foreground rounded-xl p-4 box-shadow-class'>
   <button className='bg-request-btn rounded-lg px-4 py-1'>Request Price</button>
   </div>
 </section>
 
 {/* Property Description */}
 <article className='bg-foreground px-2 md:px-6'>
   <h1 className='font-semibold'>Property Description</h1>
   <p>
    {content.prescription}
   {/* Step into a world of opulent beauty and historical richness with our Russian-inspired decor. 
   <br />
   <br />
   This style celebrates a blend of aristocratic elegance, folk traditions, and a touch of dramatic flair. Expect to see elements like intricate patterns, rich textiles, warm wood tones, and often, a nod to imperial grandeur. 
   <br />
   <br />
   Our collection captures the essence of Russian interiors, bringing a sense of timeless sophistication and cozy warmth to your home. Perfect for creating a truly unique and inviting atmosphere. */}
   </p>
 
 {/* Key characteristics you'll see */}
 <aside className='py-4 '>
 <h1 className='font-semibold my-2'>Key characteristics You'll See(on image)</h1>
 <ul className='mx-6 bg-foreground'>
   {content.whyChoose.map((item,index)=>{
     return <li className='list-disc' key={index}>{item}</li>
   })}
 </ul>
 </aside>
 </article>
 
 {/* gallery */}
 
 <article className='bg-foreground px-2 md:px-6'>
 <h1 className='text-lg font-medium'>Gallery</h1>
 
 <aside className='md:flex flex-col md:flex-row  justify-between '>
 {content.itemsToPrev.map((item,index)=>(
   <div className='relative md:w-[40%] w-[100%] h-[250px] my-4 md:my-0' key={index}>
     <Image 
     className='absolute object-cover'
     src={item.prevSrc} 
     fill
     alt={item.name}
      />
   </div>
 ))}
 </aside>
 
 </article>
     </div>
  );
}


export async function generateStaticParams() {
    return [
      ...countryPropertyData["russia"].images.map((item,index)=>{
        return {slug:"russia",id:item.id}
      }),
      ...countryPropertyData["morocco"].images.map((item,index)=>{
        return {slug:"morocco",id:item.id}
      }),
      ...countryPropertyData["italy"].images.map((item,index)=>{
        return {slug:"italy",id:item.id}
      }),
      ...countryPropertyData["china"].images.map((item,index)=>{
        return {slug:"china",id:item.id}
      }),
    ]
  }