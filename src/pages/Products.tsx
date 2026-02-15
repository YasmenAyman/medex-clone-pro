import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import AppDownloadModal from "@/components/AppDownloadModal";

const products = [
  { title: "Advanced dental implants", slug: "dental-implants" },
  { title: "CAD/CAM systems", slug: "cad-cam" },
  { title: "Specialized laser devices", slug: "laser-devices" },
  { title: "Advanced filling materials", slug: "filling-materials" },
];

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <HeroBanner title="Products" />

      <section className="py-16 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.slug}
              title={p.title}
              linkTo={`/products/${p.slug}`}
            />
          ))}
        </div>
      </section>

      <AppDownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Products;
