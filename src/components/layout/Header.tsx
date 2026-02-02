import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 border-b border-white/10 bg-background/20 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-bold leading-none text-foreground">ResumeAI</h1>
          <p className="text-sm text-muted-foreground">AI-Powered Review</p>
        </div>
      </div>
    </header>
  );
};
