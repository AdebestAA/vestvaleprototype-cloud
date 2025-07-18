import Image from "next/image"
import { accessoriesData } from "../page"
import { allImagesForDoors } from "@/app/utils/doorPopUpProps"
import {  allImagesForLights } from "@/app/utils/lightPopUpProps"
import { allImagesForWallpapers } from "@/app/utils/wallpaperPopUpProps"
import { allImagesForDoorHandles } from "@/app/utils/doorhandlePopUpProps"
import { allImagesForTiles } from "@/app/utils/tilePopUpProps"
const images = [
    {
      id:1,
      slug:"door",
      name:"door-one",
      src:"/door-01.svg",
    },
  //   {
  //     id:2,
  //     src:"chair-two.png",
  //     name:"chair two"
  //   },
  ]



  

  const characteristics: string[] = [
    `
   Exceptional Craftsmanship: Each door is meticulously crafted with attention to detail, ensuring superior quality and a flawless finish. Experience the difference of a door built to last.`,
   `Durable & Long-Lasting: Constructed from high-grade materials [mention examples like: solid wood, engineered wood, fiberglass, steel, etc., or keep generic if product range is too wide], our doors are designed to withstand daily wear and tear, offering years of reliable performance and beauty.`,
   `Versatile Design Options: From sleek modern lines to classic panel designs, and rustic [barn/farmhouse] styles, our diverse collection offers a door to complement any architectural style and interior decor. Find the perfect fit for your aesthetic vision.`,
   `Enhanced Functionality & Security: Beyond aesthetics, our doors provide robust performance. [If applicable, mention: Featuring solid core construction for better sound insulation and energy efficiency, or pre-bored for standard hardware for easy lock installation, etc.] Many designs offer enhanced security features for your peace of mind.`,
   `Easy Installation (or Contractor-Friendly): Designed for straightforward installation, our doors come ready to be fitted into your existing or new doorway. [If applicable, mention: Pre-hung options available for even simpler setup, or standard sizing to fit common door frames.]`,
   `Ready for Your Personal Touch: Most of our doors come [primed and ready to paint/stain, or in a natural finish], allowing you to customize them to perfectly match your home's color scheme and personal style.`
   ]

   const allObjects = [
    {name:"doors",images:accessoriesData.doors.images}

   ]

export default async function AccessoriesInfo({params}:{params:Promise<{slug:string,id:string | number}>}){
const {slug,id} = await params

let content = null
if (slug == "doors") {
  content = allImagesForDoors.find(item => item.name == id)
}
else if(slug == "lights"){
  content = allImagesForLights.find(item => item.name == id)
}
else if(slug == "wallpapers"){
  content = allImagesForWallpapers.find(item => item.name == id)
}
else if(slug == "door-handles"){
  content = allImagesForDoorHandles.find(item => item.name == id)
}
else if(slug == "tiles"){
  content = allImagesForTiles.find(item => item.name == id)
}

console.log(allObjects);
console.log(accessoriesData.doors.images.map((item ,index)=>{

  return {slug:"door",id:item.text}
}));


// console.log(Object.keys(accessoriesData));

     return (
        <div
        className='bg-[#F5F1E6] min-h-screen  text-black pb-8'
        >
    {/* Image Preview */}
    <div className='relative w-full h-[400px] '>
      <Image 
      fill
      className='absolute md:object-contain object-cover'
      src={content? content.src : "/vintage-light.png"} alt='russian iterior' />
    </div>
    
    {/* name and request price */}
    <section className='flex justify-between items-center px-2 md:px-6 my-4'> 
      <h1 className='text-xl font-semibold'>{content?.name}</h1>
      <div className='bg-foreground rounded-xl p-4 box-shadow-class'>
      <button className='bg-request-btn rounded-lg px-4 py-1'>Request Price</button>
      </div>
    </section>
    
    {/* Property Description */}
    <article className='bg-foreground px-2 md:px-6'>
      <h1 className='font-semibold'>Property Description</h1>
      <p className='leading-8'>
     {content?.prescription}
      </p>
    
    {/* Key characteristics you'll see */}
    <aside className='py-4 '>
    <h1 className='font-semibold my-2'>Why Choose Our Doors</h1>
    <ul className='mx-6 bg-foreground'>
      {content?.whyChoose.map((item,index)=>{
        return <li className='list-disc' key={index}>{item}</li>
      })}
    </ul>
    </aside>
    </article>
    
    {/* gallery */}
    
    <article className='bg-foreground px-2 md:px-6'>
    <h1 className='text-lg font-medium'>Gallery</h1>
    
    <aside className=' flex md:justify-between md:flex-row flex-col items-center '>
    {content?.itemsToPrev.map((item,index)=>(
      <div className='relative  w-[300px] h-[400px] my-4 md:my-0'>
        <Image 
        className='absolute md:object-contain object-cover'
        src={item.prevSrc} 
        fill
        alt={item.name}
         />
      </div>
    ))}
    </aside>
    
    </article>
        </div>)

}

export function generateStaticParams(){
    return [
      ...accessoriesData.doors.images.map((item)=>{

        return {slug:"doors",id:item.id}
      }),
      ...accessoriesData["door-handles"].images.map((item)=>{

        return {slug:"door-handles",id:item.id}
      }),
      ...accessoriesData.wallpapers.images.map((item)=>{

        return {slug:"wallpapers",id:item.id}
      }),
      ...accessoriesData.lights.images.map((item)=>{

        return {slug:"lights",id:item.id}
      }),
      ...accessoriesData.tiles.images.map((item)=>{

        return {slug:"tiles",id:item.id}
      }),
      // {slug: "doors", id: "1"},
      // {slug: "doors", id: "door-one"},
      // add more as needed
    ];
}