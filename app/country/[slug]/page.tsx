
import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";


type propertyImage = string | { image: string; text: string };

const propertyData: Record<
  string,
  {
    title: string;
    description: string;
    images: propertyImage[];
  }
> = {
  russia: {
    title: "About our Properties",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/russia-01.svg", text: "Russia Apartment" },
      { image: "/russia-02.svg", text: "Russia Apartment" },
      { image: "/russia-03.svg", text: "Russia Apartment" },
      
    ],
  },
  china: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/chineese-01.svg", text: "Chinese Interior" },
      
    ],
  },
  Italian: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/chineese-01.svg", text: "Chinese Interior" },
      
    ],
  },
  morroco: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "/morocco-01.svg", text: "Morrocan Interior" },
      { image: "/morocco-02.svg", text: "Morrocan Interior" },
      { image: "/morocco-03.svg", text: "Morrocan Interior" },
      { image: "/morocco-04.svg", text: "Morrocan Interior" },
    ],
  },
};

interface PropertyPageProps {
  params: { slug: string };
}

const PropertyPage: React.FC<PropertyPageProps> = ({ params }) => {
  // const router = useRouter()
  const content = propertyData[params.slug];

  if (!content) {
    return <div>Property not found</div>;
  }
  return (
    <>
    <Navbar/>
     <CountryDynamicComponent content={content}/>
    </>
  );
};

export default PropertyPage;

export function generateStaticParams() {
  return Object.keys(propertyData).map((slug) => ({ slug }));
}
