import { cn } from "@/lib/utils/cn";

interface SecondSelectorButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

export function SecondSelectorButton({ isActive, onClick, label }: SecondSelectorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out cursor-pointer",
        isActive
          ? "bg-primary text-primary-foreground shadow-lg"
          : "text-white hover:bg-white/10"
      )}
    >
      {label}
    </button>
  );
}