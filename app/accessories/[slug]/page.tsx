import Navbar from "@/components/Navbar";
import Image from "next/image";

type AccessoryImage = string | { image: string; text: string };

const accessoriesData: Record<
  string,
  {
    title: string;
    description: string;
    images: AccessoryImage[];
  }
> = {
  door: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/door-01.svg", text: "door" },
      { image: "/door-02.svg", text: "door" },
      { image: "/door-03.svg", text: "door" },
      { image: "/door-04.svg", text: "door" },
      { image: "/door-05.svg", text: "door" },
      { image: "/door-06.svg", text: "door" },
      { image: "/door-07.svg", text: "door" },
      { image: "/door-08.svg", text: "door" },
      { image: "/door-09.svg", text: "door" },
      { image: "/door-10.svg", text: "door" },
      { image: "/door-11.svg", text: "door" },
      { image: "/door-12.svg", text: "door" },
    ],
  },
  "doorhandle": {
    title: "About our Home Accessories",
    description: "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
   
    images: [
      { image: "/door-handle-01.svg", text: "door handle" },
      { image: "/door-handle-02.svg", text: "door handle" },
      { image: "/door-handle-03.svg", text: "door handle" },
      
    ],
  },
  lights: {
    title: "About our Home Accessories",
    description: "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    
    images: [
      { image: "/light-01.svg", text: "Vintage light" },
      { image: "/light-02.svg", text: "Vintage light" },
      { image: "/light-03.svg", text: "Vintage light" },
      { image: "/light-04.svg", text: "Vintage light" },
      { image: "/light-05.svg", text: "Vintage light" },
      { image: "/light-06.svg", text: "Vintage light" },
      { image: "/light-07.svg", text: "Vintage light" },
      { image: "/light-08.svg", text: "Vintage light" },
      { image: "/light-09.svg", text: "Vintage light" },
      { image: "/light-11.svg", text: "Vintage light" },
      { image: "/light-12.svg", text: "Vintage light" },
      { image: "/light-13.svg", text: "Vintage light" },
      { image: "/light-14.svg", text: "Vintage light" },
      { image: "/light-15.svg", text: "Vintage light" },
      { image: "/light-10.svg", text: "Vintage light" },
    ],
  },
  wallpaper: {
    title: "About our Home Accessories ",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/wallpaper-01.svg", text: "wallpaper" },
      { image: "/wallpaper-02.svg", text: "wallpaper" },
      { image: "/wallpaper-03.svg", text: "wallpaper" },
      { image: "/wallpaper-4.svg", text: "wallpaper" },
      { image: "/wallpaper-05.svg", text: "wallpaper" },
      { image: "/wallpaper-06.svg", text: "wallpaper" },
      { image: "/wallpaper-07.svg", text: "wallpaper" },
      { image: "/wallpaper-08.svg", text: "wallpaper" },
      { image: "/wallpaper-09.svg", text: "wallpaper" },
    ],
  },
};

interface PageProps {
  params: { slug: string };
}

const AccessoriesDetailPage = ({ params }: PageProps) => {
  const content = accessoriesData[params.slug];

  if (!content) {
    return (
      <div className="text-center py-20 text-white">Accessory not found.</div>
    );
  }

  return (
    <>
    <Navbar/>
      <section className="w-full h-full bg-[#17120F] font-inter">
        <div className="w-full  md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
          <div className="space-y-6 mb-12 ">
            <h1 className="text-4xl md:text-5xl font-bold ">{content.title}</h1>
            <p className="font-normal text-white/80 ">{content.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {content.images.map((img, i) => {
              const src = typeof img === "string" ? img : img.image;

              const alt =
                typeof img === "string"
                  ? `${content.title} ${i + 1}`
                  : img.text || `${content.title} ${i + 1}`;
              return (
                <div key={i}>
                  <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={500}
                    className=" border -full border-white  object-cover rounded-lg shadow-md transition-transform hover:scale-105 ease-in-out duration-300"
                  />
                  <p className="font-bold text-2xl capitalize md:text-3xl text-white mt-4">
                    {typeof img === "string" ? "" : img.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessoriesDetailPage;

export function generateStaticParams() {
  return Object.keys(accessoriesData).map((slug) => ({ slug }));
}
