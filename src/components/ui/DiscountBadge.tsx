
import { cn } from "@/lib/utils";

interface DiscountBadgeProps {
  percentage: number;
  className?: string;
}

const DiscountBadge = ({ percentage, className }: DiscountBadgeProps) => {
  return (
    <div 
      className={cn(
        "absolute top-2 right-2 bg-cosmo-pink text-white text-xs font-semibold px-2 py-1 rounded-full z-10",
        className
      )}
    >
      {percentage}% OFF
    </div>
  );
};

export default DiscountBadge;
