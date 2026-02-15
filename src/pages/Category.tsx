import { useParams } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";

const categoryData: Record<string, { title: string; items: { title: string; slug: string; count: number }[] }> = {
  "dental-implants": {
    title: "Dental Implants",
    items: [
      { title: "Operations Equipment (For Rent)", slug: "operations-equipment", count: 10 },
      { title: "Bluem Oxygen Gel", slug: "bluem", count: 10 },
      { title: "Biomaterial & BoneGraft", slug: "biomaterial", count: 10 },
      { title: "Powerbone | Implant (Turkey)", slug: "powerbone", count: 10 },
      { title: "Point Implants (Korea)", slug: "point-implants", count: 10 },
      { title: "B&B Implant (Italy)", slug: "bb-implant", count: 10 },
    ],
  },
  "cad-cam": {
    title: "CAD/CAM Systems",
    items: [
      { title: "Digital Scanners", slug: "digital-scanners", count: 10 },
      { title: "Milling Machines", slug: "milling-machines", count: 10 },
      { title: "3D Printers", slug: "3d-printers", count: 10 },
      { title: "Design Software", slug: "design-software", count: 10 },
      { title: "Materials", slug: "materials", count: 10 },
      { title: "Accessories", slug: "accessories", count: 10 },
    ],
  },
};

const Category = () => {
  const { category } = useParams();
  const data = categoryData[category || ""] || {
    title: "Category",
    items: Array.from({ length: 6 }, (_, i) => ({
      title: `Category ${i + 1}`,
      slug: `cat-${i + 1}`,
      count: 10,
    })),
  };

  return (
    <div>
      <HeroBanner title={data.title || "Category"} />

      <section className="py-16 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item) => (
            <CategoryCard
              key={item.slug}
              title={item.title}
              productCount={item.count}
              linkTo={`/products/${category}/${item.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
