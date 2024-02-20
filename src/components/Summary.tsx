import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface SummaryProps {
  className?: string;
  description: string;
}

export function Summary({ description, className }: SummaryProps) {
  return (
    <ScrollArea
      className={cn(
        "h-[169px] w-[370px] bg-white border-t rounded-b-2xl shadow-md",
        className
      )}
    >
      <div className="px-8 ">
        <p className="text-sm">{description}</p>
      </div>
    </ScrollArea>
  );
}
