import { useParams, Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import { ChevronRight } from "lucide-react";
import productsHero from "@/assets/products-hero.png";

const subcategoryNames: Record<string, string> = {
    "operations-equipment": "Operations Equipment (For Rent)",
    "bluem": "Bluem Oxygen Gel",
    "biomaterial": "Biomaterial & BoneGraft",
    "powerbone": "Powerbone | Implant (Turkey)",
    "point-implants": "Point Implants (Korea)",
    "bb-implant": "B&B Implant (Italy)",
    "digital-scanners": "Digital Scanners",
    "milling-machines": "Milling Machines",
    "3d-printers": "3D Printers",
    "design-software": "Design Software",
    "materials": "Materials",
    "accessories": "Accessories",
    "diode-lasers": "Diode Lasers",
    "er-yag-lasers": "Er:YAG Lasers",
    "co2-lasers": "CO2 Lasers",
    "nd-yag-lasers": "Nd:YAG Lasers",
    "laser-accessories": "Accessories & Tips",
    "composite-resins": "Composite Resins",
    "glass-ionomer": "Glass Ionomer",
    "temporary-fillings": "Temporary Fillings",
    "bonding-agents": "Bonding Agents",
    "cements": "Cements",
    "liners-bases": "Liners & Bases",
    "polishing": "Polishing Materials",
    "filling-accessories": "Accessories",
};

const categoryNames: Record<string, string> = {
    "dental-implants": "Advanced Dental Implants",
    "cad-cam": "CAD/CAM Systems",
    "laser-devices": "Specialized Laser Devices",
    "filling-materials": "Advanced Filling Materials",
};

// Mock products — 8 per subcategory
const generateProducts = (subcategory: string) =>
    Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        name: `${subcategoryNames[subcategory] || "Product"} — Model ${String.fromCharCode(65 + i)}`,
        count: 10,
        slug: `product-${i + 1}`,
    }));

const ProductsList = () => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const products = generateProducts(subcategory || "");
    const subcatName = subcategoryNames[subcategory || ""] || "Products";
    const catName = categoryNames[category || ""] || "Category";

    return (
        <div>
            <HeroBanner title={subcatName} backgroundImage={productsHero} />

            <section className="py-16 container">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10 flex-wrap">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link to="/category" className="hover:text-primary transition-colors">Categories</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link to={`/${category}/products`} className="hover:text-primary transition-colors">{catName}</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-primary font-medium">{subcatName}</span>
                </nav>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group block rounded-2xl bg-secondary/60 border border-border/50 p-6 hover:shadow-lg transition-all duration-300 min-h-[220px] relative overflow-hidden"
                        >
                            {/* Title & count */}
                            <h3 className="text-lg font-bold text-foreground leading-tight mb-1">{product.name}</h3>
                            <p className="text-sm text-muted-foreground">{product.count} Items</p>

                            {/* Decorative background shape */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-muted/50 rounded-bl-[4rem] pointer-events-none" />

                            {/* Placeholder image area */}
                            <div className="flex items-end justify-end h-24 mt-4">
                                <div className="flex gap-2 items-end opacity-40">
                                    <div className="w-12 h-16 bg-muted rounded-xl" />
                                    <div className="w-8 h-12 bg-muted rounded-xl" />
                                </div>
                            </div>

                            {/* See Products link */}
                            <div className="absolute bottom-5 left-6 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                                See Products <ChevronRight className="h-4 w-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductsList;
