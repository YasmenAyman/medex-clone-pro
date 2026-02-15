import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  productCount: number;
  linkTo: string;
}

const CategoryCard = ({ title, productCount, linkTo }: CategoryCardProps) => (
  <Link
    to={linkTo}
    className="group block rounded-2xl bg-secondary p-6 hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col justify-between"
  >
    <div>
      <h3 className="text-lg font-bold text-foreground leading-tight mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{productCount} Products</p>
    </div>
    <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all">
      See Products <ChevronRight className="h-4 w-4" />
    </div>
  </Link>
);

export default CategoryCard;
