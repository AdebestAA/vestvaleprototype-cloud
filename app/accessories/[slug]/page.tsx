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
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863733/door-01_l4mkb9.svg", text: "door-one", id:"door-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863737/door-02_lqrk81.svg", text: "door-two" ,id:"door-two"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863739/door-03_nq89hb.svg", text: "door-three", id:"door-three"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863742/door-04_b9z7s9.svg", text: "door-four", id:"door-four"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863715/door-05_tassgr.svg", text: "door-five" ,id:"door-five" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863716/door-06_pvxpt2.svg", text: "door-six", id:"door-six"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863718/door-07_wzqcea.svg", text: "door-seven", id:"door-seven"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863720/door-08_eevlf1.svg", text: "door-eight" , id:"door-eight" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863723/door-09_bcyh0r.svg", text: "door-nine", id:"door-nine"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863724/door-10_agl9pz.svg", text: "door-ten" , id:"door-ten" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863727/door-11_kdh3cu.svg", text: "door-eleven" ,id:"door-eleven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752863729/door-12_ehernk.svg", text: "door-twelve", id:"door-twelve"  },
    ],
  },
  "door-handles": {
    title: "About our Home Accessories",
    description: "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
   
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752865128/door-handle-01_w5rxkd.svg", text: "door handle", id:"door-handle-one"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752865127/door-handle-02_oh320d.svg", text: "door handle", id:"door-handle-two"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752865130/door-handle-03_nqxcsd.svg", text: "door handle",  id:"door-handle-three"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771879/DH1_j9uxds.jpg", text: "door handle",  id:"door-handle-four"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771901/DH11_ocqo6s.jpg", text: "door handle",  id:"door-handle-five"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771904/DH12_yj0ynu.jpg", text: "door handle",  id:"door-handle-six"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771880/DH2_zftzic.jpg", text: "door handle",  id:"door-handle-seven"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771880/DH4_jdhlrg.jpg", text: "door handle",  id:"door-handle-eight"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771881/DH5_qwaa0g.jpg", text: "door handle",  id:"door-handle-nine"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771893/DH6_f9jim7.jpg", text: "door handle",  id:"door-handle-ten"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771894/DH8_kwvxeq.jpg", text: "door handle",  id:"door-handle-eleven"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771896/DH9_qsgo6h.jpg", text: "door handle",  id:"door-handle-twelve"},
      
    ],
  },
  lights: {
    title: "About our Home Accessories",
    description: "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772009/mmexport1748708887089_tjhojd.jpg", text: "light-one", id:"vintage-light-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772006/mmexport1748708902266_tabbd8.jpg", text: "light-two", id:"vintage-light-two" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771985/mmexport1748443273048_c37cdg.jpg", text: "light-three" , id:"vintage-light-three" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771980/mmexport1748443184366_rpcnfp.jpg", text: "light-four" , id:"vintage-light-four"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771975/L17_fgwgbd.jpg", text: "Vintage light" , id:"light-five"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771964/L13_mltxer.jpg", text: "Vintage light" , id:"light-six"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771961/L12_mabx0z.jpg", text: "Vintage light", id:"light-seven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771955/L11_t63n3v.jpg", text: "Vintage light" , id:"light-eight"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771954/L10_zzsykc.jpg", text: "Vintage light", id:"light-nine" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771953/L9_fg09vn.jpg", text: "Vintage light" , id:"light-ten"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771952/L8_amq7gb.jpg", text: "Vintage light", id:"light-eleven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771939/l3_wwzii5.jpg", text: "Vintage light", id:"light-twelve" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771939/l5_b2qup0.jpg", text: "Vintage light" , id:"light-thirteen"},
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771938/l4_ujpvkm.jpg", text: "Vintage light", id:"light-fourteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771937/l2_hnr8ca.jpg", text: "Vintage light", id:"light-fifteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771936/l1_ipver7.jpg", text: "Vintage light", id:"light-sixteen" },
    ],
  },
  wallpapers: {
    title: "About our Home Accessories ",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772167/WhatsApp_Image_2025-05-31_at_09.49.39_bcdc07df_tqwrct.jpg", text: "wallpaper", id:"wallpaper-one" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772167/WhatsApp_Image_2025-05-31_at_09.49.38_ecc7b942_gxjaar.jpg", text: "wallpaper" , id:"wallpaper-two" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772166/WhatsApp_Image_2025-05-31_at_09.49.38_41df8110_hna74p.jpg", text: "wallpaper", id:"wallpaper-three"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772152/W18_dbqc92.jpg", text: "wallpaper" , id:"wallpaper-four"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772145/W17_t8ii1k.jpg", text: "wallpaper", id:"wallpaper-five"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772144/W14_qzclki.jpg", text: "wallpaper" , id:"wallpaper-six" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772144/W16_twkum5.jpg", text: "wallpaper" , id:"wallpaper-seven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772143/W15_sfgifu.jpg", text: "wallpaper" , id:"wallpaper-eight" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772139/W13_yylyga.jpg", text: "wallpaper" , id:"wallpaper-nine" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772119/W12_ihktmt.jpg", text: "wallpaper" , id:"wallpaper-ten" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772119/w10_ozornt.jpg", text: "wallpaper" , id:"wallpaper-eleven" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772117/w11_k3xp7i.jpg", text: "wallpaper" , id:"wallpaper-twelve" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772115/w8_sfk9id.jpg", text: "wallpaper" , id:"wallpaper-thirteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772114/w9_jlmzdr.jpg", text: "wallpaper" , id:"wallpaper-fourteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772009/mmexport1748657099248_eqxzy6.jpg", text: "wallpaper" , id:"wallpaper-fifteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772007/mmexport1748573163380_flsxkr.jpg", text: "wallpaper" , id:"wallpaper-sixteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771998/mmexport1748572390478_szfmhk.jpg", text: "wallpaper" , id:"wallpaper-seventeen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771872/1748572496523_msdodm.png", text: "wallpaper" , id:"wallpaper-eighteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772090/w5_rcpu8z.jpg", text: "wallpaper" , id:"wallpaper-nineteen" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772113/w7_k0cvwj.jpg", text: "wallpaper" , id:"wallpaper-twenty" },
     
    ],
  },
  tiles: {
    title: "About our Home Accessories ",
    description:
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design. Each of our interiors is inspired by some of the world’s most iconic and refined aesthetics — offering residents a truly global living experience.",
    images: [
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772040/T4_fhom6g.png", text: "title" , id:"tile-one"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772038/T2_dvgxgw.png", text: "title" , id:"tite-two"  },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772038/T3_l1iiuu.png", text: "title" , id:"tite-three" },
      { image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1752772038/T3_l1iiuu.png", text: "title" , id:"tite-four" },
   
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

