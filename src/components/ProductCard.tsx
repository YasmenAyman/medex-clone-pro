import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  image?: string;
  linkTo: string;
}

const ProductCard = ({ title, linkTo }: ProductCardProps) => (
  <Link
    to={linkTo}
    className="group block rounded-2xl bg-secondary p-6 hover:shadow-lg transition-all duration-300 min-h-[280px] relative flex flex-col"
  >
    <h3 className="text-xl font-bold text-primary leading-tight max-w-[180px]">{title}</h3>
    <div className="flex-1 flex items-center justify-center py-6">
      <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
        <div className="w-16 h-20 bg-border rounded-lg" />
      </div>
    </div>
    <button className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-foreground text-primary-foreground flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors">
      <Plus className="h-5 w-5" />
    </button>
  </Link>
);

export default ProductCard;
