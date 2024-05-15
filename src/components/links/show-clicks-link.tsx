import { cn } from "@/utils";
import { BarChartIcon } from "lucide-react";

interface ShowClicksProps {
  numberOfClicks: number;
  className?: string;
}

const ShowClicks = ({
  numberOfClicks,
  className,
}: ShowClicksProps) => {
  return (
    <div
      className={cn(
        "flex cursor-default items-center space-x-2 text-xs",
        className,
      )}
    >
      <BarChartIcon size={14} />
      <span className="font-mono">{numberOfClicks} clicks</span>
    </div>
  );
};

export default ShowClicks;
