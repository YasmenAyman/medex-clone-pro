import { useState } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import { Plus, X } from "lucide-react";
import productsHero from "@/assets/products-hero.png";
import serviceStore from "@/assets/service-store.jpg";
import serviceAcademy from "@/assets/service-academy.jpg";
import serviceDental from "@/assets/service-dental.jpg";

interface Product {
    title: string;
    slug: string;
    img: string;
    description: string;
    linkTo: string;
}

const categories: Product[] = [
    {
        title: "Advanced dental implants",
        slug: "dental-implants",
        img: productsHero,
        description:
            "Made from high-quality titanium to ensure the highest success rates and longevity. Our dental implants are designed to integrate seamlessly with the jawbone, providing a permanent and natural-looking solution for missing teeth.",
        linkTo: "/dental-implants/products",
    },
    {
        title: "CAD/CAM systems",
        slug: "cad-cam",
        img: serviceAcademy,
        description:
            "Advanced digital technologies for designing and manufacturing dental restorations with high accuracy. CAD/CAM systems enable same-day restorations, reducing patient wait times and improving clinical outcomes.",
        linkTo: "/cad-cam/products",
    },
    {
        title: "Specialized laser devices",
        slug: "laser-devices",
        img: serviceDental,
        description:
            "Specialized laser devices for delicate treatments and cosmetic dental procedures. These devices offer precision, minimal invasiveness, and faster healing times compared to traditional methods.",
        linkTo: "/laser-devices/products",
    },
    {
        title: "Advanced filling materials",
        slug: "filling-materials",
        img: serviceStore,
        description:
            "High-quality restorative materials providing excellent aesthetics and durability for dental fillings. Our filling materials are biocompatible and designed to match the natural color of teeth.",
        linkTo: "/filling-materials/products",
    },
];

const CategoryList = () => {
    const [selected, setSelected] = useState<Product | null>(null);

    return (
        <div>
            <HeroBanner title="Products" backgroundImage={productsHero} />

            <section className="py-16 container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.slug}
                            className="group block rounded-2xl bg-secondary/60 border border-border/50 p-5 hover:shadow-lg transition-all duration-300 min-h-[280px] relative overflow-hidden cursor-pointer"
                            onClick={() => setSelected(cat)}
                        >
                            {/* Title top-left */}
                            <h3 className="text-xl font-bold text-foreground leading-tight whitespace-pre-line max-w-[180px] mb-4">
                                {cat.title}
                            </h3>

                            {/* Decorative background shape top-right */}
                            <div className="absolute top-0 right-0 w-28 h-28 bg-muted/50 rounded-bl-[5rem] pointer-events-none" />

                            {/* Product image bottom-left */}
                            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] flex items-end justify-start pl-4 pb-4">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Plus button bottom-right */}
                            <button
                                className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-foreground text-primary-foreground flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors z-10"
                                onClick={(e) => { e.stopPropagation(); setSelected(cat); }}
                            >
                                <Plus className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Detail Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                            onClick={() => setSelected(null)}
                        >
                            <X className="h-4 w-4 text-foreground" />
                        </button>

                        {/* Product image */}
                        <div className="h-56 bg-secondary/60 flex items-center justify-center overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-muted/40 rounded-bl-[6rem]" />
                            <img
                                src={selected.img}
                                alt={selected.title}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-foreground mb-3 leading-tight">
                                {selected.title}
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {selected.description}
                            </p>

                            <Link
                                to={selected.linkTo}
                                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
                                onClick={() => setSelected(null)}
                            >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryList;
