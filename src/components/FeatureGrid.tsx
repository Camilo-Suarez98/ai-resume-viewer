import { Zap, FileSearch, ChartBar } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description: "Advanced AI reviews your content for clarity, impact, and effectiveness.",
  },
  {
    icon: FileSearch,
    title: "Detailed Feedback",
    description: "Get specific suggestions on structure, keywords, and content quality.",
  },
  {
    icon: ChartBar,
    title: "Actionable Items",
    description: "Receive prioritized action items to improve your chances of success.",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mt-20 px-4">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
        >
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-emerald-500">
            <feature.icon className="w-6 h-6" />
          </div>
          <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-neutral-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
