import { type Metadata } from "next";
import AccessoryDynamicComponent from "@/components/AccessoryComponent/AccessoryDynamicComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const dynamic = "force-static";


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
    description: "Luxury is defined by culture, craftsmanship, and timeless design...",
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
  tiles: {
    title: "About our Home Accessories ",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/tile-01.svg", text: "title" },
      { image: "/tile-02.svg", text: "title" },
      { image: "/tile-03.svg", text: "title" },
      { image: "/tile-04.svg", text: "title" },
   
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
      <AccessoryDynamicComponent content={content} />
    </>
  );
};

export default AccessoriesDetailPage;

export function generateStaticParams() {
  return Object.keys(accessoriesData).map((slug) => ({ slug }));
}

