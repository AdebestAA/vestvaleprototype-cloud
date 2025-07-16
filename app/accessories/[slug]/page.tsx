import { type Metadata } from "next";
import AccessoryDynamicComponent from "@/components/AccessoryComponent/AccessoryDynamicComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const dynamic = "force-static";


type AccessoryImage = { image: string; text: string ,id:string};

export const accessoriesData: Record<
  string,
  {
    title: string;
    description: string;
    images: AccessoryImage[];
  }
> = {
  doors: {
    title: "About our Home Accessories",
    description: "Luxury is defined by culture, craftsmanship, and timeless design...",
    images: [
      { image: "/door-01.svg", text: "door-one", id:"door-one" },
      { image: "/door-02.svg", text: "door-two" ,id:"door-two"  },
      { image: "/door-03.svg", text: "door-three", id:"door-three"  },
      { image: "/door-04.svg", text: "door-four", id:"door-four"  },
      { image: "/door-05.svg", text: "door-five" ,id:"door-five" },
      { image: "/door-06.svg", text: "door-six", id:"door-six"  },
      { image: "/door-07.svg", text: "door-seven", id:"door-seven"  },
      { image: "/door-08.svg", text: "door-eight" , id:"door-eight" },
      { image: "/door-09.svg", text: "door-nine", id:"door-nine"  },
      { image: "/door-10.svg", text: "door-ten" , id:"door-ten" },
      { image: "/door-11.svg", text: "door-eleven" ,id:"door-eleven" },
      { image: "/door-12.svg", text: "door-twelve", id:"door-twelve"  },
    ],
  },
  "door-handles": {
    title: "About our Home Accessories",
    description: "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
   
    images: [
      { image: "/door-handle-01.svg", text: "door handle", id:"door-handle-one"  },
      { image: "/door-handle-02.svg", text: "door handle", id:"door-handle-two"  },
      { image: "/door-handle-03.svg", text: "door handle",  id:"door-handle-three"},
      
    ],
  },
  lights: {
    title: "About our Home Accessories",
    description: "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    
    images: [
      { image: "/light-01.svg", text: "Vintage light", id:"vintage-light-one" },
      { image: "/light-02.svg", text: "Vintage light", id:"vintage-light-two" },
      { image: "/light-03.svg", text: "Vintage light" , id:"vintage-light-three" },
      { image: "/light-04.svg", text: "Vintage light" , id:"vintage-light-four"},
      { image: "/light-05.svg", text: "Vintage light" , id:"vintage-light-five"},
      { image: "/light-06.svg", text: "Vintage light" , id:"vintage-light-six"},
      { image: "/light-07.svg", text: "Vintage light", id:"vintage-light-seven" },
      { image: "/light-08.svg", text: "Vintage light" , id:"vintage-light-eight"},
      { image: "/light-09.svg", text: "Vintage light", id:"vintage-light-nine" },
      { image: "/light-11.svg", text: "Vintage light" , id:"vintage-light-ten"},
      { image: "/light-12.svg", text: "Vintage light", id:"vintage-light-eleven" },
      { image: "/light-13.svg", text: "Vintage light", id:"vintage-light-twelve" },
      { image: "/light-14.svg", text: "Vintage light" , id:"vintage-light-thirteen"},
      { image: "/light-15.svg", text: "Vintage light", id:"vintage-light-fourteen" },
      { image: "/light-10.svg", text: "Vintage light", id:"vintage-light-fifteen" },
    ],
  },
  wallpapers: {
    title: "About our Home Accessories ",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/wallpaper-01.svg", text: "wallpaper", id:"wallpaper-one" },
      { image: "/wallpaper-02.svg", text: "wallpaper" , id:"wallpaper-two" },
      { image: "/wallpaper-03.svg", text: "wallpaper", id:"wallpaper-three"  },
      { image: "/wallpaper-4.svg", text: "wallpaper" , id:"wallpaper-four"  },
      { image: "/wallpaper-05.svg", text: "wallpaper", id:"wallpaper-five"  },
      { image: "/wallpaper-06.svg", text: "wallpaper" , id:"wallpaper-six" },
      { image: "/wallpaper-07.svg", text: "wallpaper" , id:"wallpaper-seven" },
      { image: "/wallpaper-08.svg", text: "wallpaper" , id:"wallpaper-eight" },
      { image: "/wallpaper-09.svg", text: "wallpaper" , id:"wallpaper-nine" },
    ],
  },
  tiles: {
    title: "About our Home Accessories ",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/tile-01.svg", text: "title" , id:"tile-one"  },
      { image: "/tile-02.svg", text: "title" , id:"tite-two"  },
      { image: "/tile-03.svg", text: "title" , id:"tite-three" },
      { image: "/tile-04.svg", text: "title" , id:"tite-four" },
   
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>,
  
}

const AccessoriesDetailPage =async({ params }: PageProps) => {
  const {slug} = await params
  const content = accessoriesData[slug];

  if (!content) {
    return (
      <div className="text-center py-20 text-white">Accessory not found.</div>
    );
  }

  return (
    <>
      <Navbar />
      <AccessoryDynamicComponent slug={slug} content={content} />
    </>
  );
};

export default AccessoriesDetailPage;

export function generateStaticParams() {
  return Object.keys(accessoriesData).map((slug) => ({ slug }));
}

