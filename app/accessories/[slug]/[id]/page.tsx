import Image from "next/image"

const images = [
    {
      id:1,
      src:"/vintage-light.png",
      name:"chair one"
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

export default async function AccessoriesInfo({params}:{params:Promise<{slug:string,id:string | number}>}){
const {slug,id} = await params
     return (
        <div
        className='bg-[#F5F1E6] min-h-screen  text-black pb-8'
        >
    {/* Image Preview */}
    <div className='relative w-full h-[400px] '>
      <Image 
      fill
      className='absolute md:object-contain object-cover'
      src={"/vintage-light.png"} alt='russian iterior' />
    </div>
    
    {/* name and request price */}
    <section className='flex justify-between items-center px-2 md:px-6 my-4'> 
      <h1 className='text-xl font-semibold'>Vintage Light</h1>
      <div className='bg-foreground rounded-xl p-4 box-shadow-class'>
      <button className='bg-request-btn rounded-lg px-4 py-1'>Request Price</button>
      </div>
    </section>
    
    {/* Property Description */}
    <article className='bg-foreground px-2 md:px-6'>
      <h1 className='font-semibold'>Property Description</h1>
      <p className='leading-8'>
      Elevate Your Space with Our Premium [Interior/Exterior] Door Collection!
      Discover the perfect blend of style, security, and craftsmanship with our versatile range of doors. Whether you're seeking to enhance your home's curb appeal, redefine an interior space, or simply replace an old door, our collection offers exceptional quality and design to suit every need.
      </p>
    
    {/* Key characteristics you'll see */}
    <aside className='py-4 '>
    <h1 className='font-semibold my-2'>Why Choose Our Doors</h1>
    <ul className='mx-6 bg-foreground'>
      {characteristics.map((item,index)=>{
        return <li className='list-disc' key={index}>{item}</li>
      })}
    </ul>
    </aside>
    </article>
    
    {/* gallery */}
    
    <article className='bg-foreground px-2 md:px-6'>
    <h1 className='text-lg font-medium'>Gallery</h1>
    
    <aside className='  '>
    {images.map((item,index)=>(
      <div className='relative  w-[300px] h-[400px] my-4 md:my-0'>
        <Image 
        className='absolute md:object-contain object-cover'
        src={item.src} 
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
    return [{slug:"door",id:"1"}]
}