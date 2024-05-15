import { cn } from "@/utils";
import { Heart } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer
      className={cn(
        "group w-full text-sm text-neutral-600 animate-in fade-in-25 dark:text-neutral-400",
        "bg-white backdrop-blur-md dark:bg-neutral-900",
        props.className,
      )}
    >
      <div className={cn("container flex items-center justify-between")}>
        <div className="flex items-center space-x-2">
          <Heart
            size={14}
            className="text-red-500 group-hover:transform group-hover:animate-pulse"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
