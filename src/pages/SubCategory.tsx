import { useParams } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";

const subCategoryData: Record<string, { title: string; items: { title: string; slug: string; count: number }[] }> = {
  "bb-implant": {
    title: "B&B Implant",
    items: [
      { title: "B&B | Fixtures Line", slug: "fixtures-line", count: 10 },
      { title: "B&B Straight & Angled Abutments", slug: "abutments", count: 10 },
      { title: "B&B | Healing Abutments", slug: "healing-abutments", count: 10 },
      { title: "B&B | Transfers & Analogs", slug: "transfers", count: 10 },
      { title: "B&B | Ball Abutments", slug: "ball-abutments", count: 10 },
      { title: "B&B | Multi Unit solutions", slug: "multi-unit", count: 10 },
    ],
  },
};

const SubCategory = () => {
  const { category, subcategory } = useParams();
  const data = subCategoryData[subcategory || ""] || {
    title: "Sub-category",
    items: Array.from({ length: 6 }, (_, i) => ({
      title: `Sub-category ${i + 1}`,
      slug: `sub-${i + 1}`,
      count: 10,
    })),
  };

  return (
    <div>
      <HeroBanner title={data.title || "Sub-category"} />

      <section className="py-16 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item) => (
            <CategoryCard
              key={item.slug}
              title={item.title}
              productCount={item.count}
              linkTo={`/products/${category}/${subcategory}/${item.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SubCategory;
