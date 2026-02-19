import { useParams, Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import { ChevronRight } from "lucide-react";
import productsHero from "@/assets/products-hero.png";

// Main categories shown at /category
const mainCategories = [
    { title: "Advanced dental implants", slug: "dental-implants", count: 6 },
    { title: "CAD/CAM systems", slug: "cad-cam", count: 6 },
    { title: "Specialized laser devices", slug: "laser-devices", count: 5 },
    { title: "Advanced filling materials", slug: "filling-materials", count: 8 },
];

// Subcategories shown at /:category/products
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
    "laser-devices": {
        title: "Specialized Laser Devices",
        items: [
            { title: "Diode Lasers", slug: "diode-lasers", count: 8 },
            { title: "Er:YAG Lasers", slug: "er-yag-lasers", count: 6 },
            { title: "CO2 Lasers", slug: "co2-lasers", count: 5 },
            { title: "Nd:YAG Lasers", slug: "nd-yag-lasers", count: 4 },
            { title: "Accessories & Tips", slug: "laser-accessories", count: 12 },
        ],
    },
    "filling-materials": {
        title: "Advanced Filling Materials",
        items: [
            { title: "Composite Resins", slug: "composite-resins", count: 15 },
            { title: "Glass Ionomer", slug: "glass-ionomer", count: 10 },
            { title: "Temporary Fillings", slug: "temporary-fillings", count: 8 },
            { title: "Bonding Agents", slug: "bonding-agents", count: 12 },
            { title: "Cements", slug: "cements", count: 9 },
            { title: "Liners & Bases", slug: "liners-bases", count: 7 },
            { title: "Polishing Materials", slug: "polishing", count: 11 },
            { title: "Accessories", slug: "filling-accessories", count: 6 },
        ],
    },
};

// Reusable card grid
const ItemCard = ({ title, count, linkTo }: { title: string; count: number; linkTo: string }) => (
    <Link
        to={linkTo}
        className="group block rounded-2xl bg-secondary/60 border border-border/50 p-6 hover:shadow-lg transition-all duration-300 min-h-[220px] relative overflow-hidden"
    >
        <h3 className="text-lg font-bold text-foreground leading-tight mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} Products</p>
        <div className="absolute top-0 right-0 w-24 h-24 bg-muted/50 rounded-bl-[4rem] pointer-events-none" />
        <div className="flex items-end justify-end h-24 mt-4">
            <div className="flex gap-2 items-end opacity-40">
                <div className="w-12 h-16 bg-muted rounded-xl" />
                <div className="w-8 h-12 bg-muted rounded-xl" />
            </div>
        </div>
        <div className="absolute bottom-5 left-6 flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
            See Products <ChevronRight className="h-4 w-4" />
        </div>
    </Link>
);

const SubcategoryList = () => {
    const { category } = useParams<{ category: string }>();

    // /category — show main 4 categories
    if (!category) {
        return (
            <div>
                <HeroBanner title="Category" backgroundImage={productsHero} />
                <section className="py-16 container">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10 flex-wrap">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="text-primary font-medium">Categories</span>
                    </nav>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mainCategories.map((cat) => (
                            <ItemCard
                                key={cat.slug}
                                title={cat.title}
                                count={cat.count}
                                linkTo={`/${cat.slug}/products`}
                            />
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    // /:category/products — show subcategories
    const data = categoryData[category] || {
        title: "Category",
        items: Array.from({ length: 6 }, (_, i) => ({
            title: `Subcategory ${i + 1}`,
            slug: `sub-${i + 1}`,
            count: 10,
        })),
    };

    return (
        <div>
            <HeroBanner title={data.title} backgroundImage={productsHero} />
            <section className="py-16 container">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-10 flex-wrap">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link to="/category" className="hover:text-primary transition-colors">Categories</Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-primary font-medium">{data.title}</span>
                </nav>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.items.map((item) => (
                        <ItemCard
                            key={item.slug}
                            title={item.title}
                            count={item.count}
                            linkTo={`/${category}/${item.slug}/products`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SubcategoryList;
