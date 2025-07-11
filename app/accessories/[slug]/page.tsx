import AccessoryDynamicComponent from "@/components/AccessoryComponent/AccessoryDynamicComponent";
import Navbar from "@/components/Navbar";

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
      "At Vestvale Estate, we believe luxury is defined by culture, craftsmanship, and timeless design...",
    images: [
      { image: "/door-01.svg", text: "door" },
      // ... other images
    ],
  },
  // ... other accessories
};

export default function AccessoriesDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = accessoriesData[params.slug];

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
}

export function generateStaticParams() {
  return Object.keys(accessoriesData).map((slug) => ({ slug }));
}
