import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="p-1.5 bg-gradient-primary rounded-lg">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-none">ResumeAI</h1>
          <p className="text-xs text-muted-foreground">AI-Powered Review</p>
        </div>
      </div>
    </header>
  );
}
