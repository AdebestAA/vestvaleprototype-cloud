
import CountryDynamicComponent from "@/components/CountryComponents/CountryDynamicComponent";
import Navbar from "@/components/Navbar";
import Image from "next/image";


type propertyImage ={ image: string; text: string,id:string };

export const countryPropertyData: Record<
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
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772058/v2_srqlek.png", text: "Russia Apartment",id:"russian-decor-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772016/R1_fzcmkq.png", text: "Russia Apartment" ,id:"russian-decor-two"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772016/R1_fzcmkq.png", text: "Russia Apartment" ,id:"russian-decor-three"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772013/R3_i23dxb.png", text: "Russia Apartment" ,id:"russian-decor-four"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772013/R4_kf10un.png", text: "Russia Apartment" ,id:"russian-decor-five"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772010/R2_b5jreh.png", text: "Russia Apartment" ,id:"russian-decor-six"},
      
    ],
  },
  china: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771946/file_00000000119c622fb312aa694ac3275e_eyeit7.png", text: "Chinese Interior",id:"chinese-decor-one"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771929/file_00000000284061f8ac00b66c24e770b7_loz2mt.png", text: "Chinese Interior",id:"chinese-decor-two"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771918/file_000000006c2c622f9e9037db2106c666_kc2utm.png", text: "Chinese Interior",id:"chinese-decor-three"  },
      
    ],
  },
  italy: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771940/Italy1_ub7nfm.png", text: "Italian Interior",id:"italian-decor-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771934/Italy4_kuelya.png", text: "Italian Interior",id:"italian-decor-two"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771932/Italy2_yd99cw.png", text: "Italian Interior",id:"italian-decor-three"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771913/file_00000000aab861f59fb63a20bdf44a55_pwln1m.png", text: "Italian Interior",id:"italian-decor-four"  },
      
    ],
  },
  morocco: {
    title: "About our Home Accessories",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771983/M1_k7ulov.png", text: "Morrocan Interior",id:"moroccan-decor-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771980/M3_spaizw.png", text: "Morrocan Interior" ,id:"moroccan-decor-two"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771980/M4_dhqn9p.png", text: "Morrocan Interior" ,id:"moroccan-decor-three"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771977/M2_bpc6ps.png", text: "Morrocan Interior" ,id:"moroccan-decor-four"},
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>,
  
}

const PropertyPage =async ({ params }:PageProps) => {
  // const router = useRouter()
  const {slug} = await params
  const content =  countryPropertyData[slug];

  if (!content) {
    return <div>Property not found</div>;
  }
  return (
    <>
    <Navbar/>
     <CountryDynamicComponent content={content} slug={slug}/>
    </>
  );
};

export default PropertyPage;

export function generateStaticParams() {
  console.log("these are keys",Object.keys(countryPropertyData).map((slug) => ({ slug })));
  
  return Object.keys(countryPropertyData).map((slug) => ({ slug }));
}

