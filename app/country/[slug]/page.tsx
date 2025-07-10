
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
      <section className="w-full h-full bg-[#17120F] font-inter px-4 lg:px-0">
        <div className="w-full  md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter">
          <div className="space-y-6 mb-12 ">
            <h1 className="text-4xl md:text-5xl font-bold ">{content.title}</h1>
            <p className="font-normal text-white/80 ">{content.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center  ">
            {content.images.map((img, i) => {
              const src = typeof img === "string" ? img : img.image;

              const alt =
                typeof img === "string"
                  ? `${content.title} ${i + 1}`
                  : img.text || `${content.title} ${i + 1}`;
              return (
                <div key={i} 
                // onClick={()=> router.push("/russian-interior-demo")}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={500}
                    className=" border-white  object-cover rounded-lg shadow-md transition-transform hover:scale-102 ease-in-out duration-300"
                  />
                  <p className="font-bold text-xl capitalize md:text-xl text-white mt-4">
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

export default PropertyPage;

export function generateStaticParams() {
  return Object.keys(propertyData).map((slug) => ({ slug }));
}
