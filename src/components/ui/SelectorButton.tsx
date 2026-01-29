import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface SelectorButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export function SelectorButton({ isActive, onClick, icon: Icon, label }: SelectorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer",
        isActive
          ? "bg-primary text-primary-foreground shadow-lg"
          : "text-white hover:bg-white/10"
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
