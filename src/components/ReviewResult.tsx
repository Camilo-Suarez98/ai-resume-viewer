import { CheckCircle2, XCircle, Lightbulb, Target } from "lucide-react";

interface ReviewResultProps {
  data: {
    score: number;
    summary: string;
    strengths: string[];
    weaknesses: string[];
    actionItems: string[];
    keywords: string[];
  };
}

export function ReviewResult({ data }: ReviewResultProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Score Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl p-8">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#2e2e2e"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={data.score > 70 ? "#10b981" : data.score > 40 ? "#f59e0b" : "#ef4444"}
              strokeWidth="3"
              strokeDasharray={`${data.score}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-white">{data.score}</span>
            <span className="text-xs text-neutral-400">Score</span>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">Overall Analysis</h2>
          <p className="text-neutral-300 leading-relaxed">{data.summary}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            Strengths
          </h3>
          <ul className="space-y-3">
            {data.strengths.map((item, i) => (
              <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
            Areas for Improvement
          </h3>
          <ul className="space-y-3">
            {data.weaknesses.map((item, i) => (
              <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Items */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-2">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
            <Target className="w-5 h-5 text-blue-500" />
            Action Plan
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {data.actionItems.map((item, i) => (
              <div key={i} className="flex gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="bg-blue-500/10 p-2 rounded-lg h-fit">
                  <Lightbulb className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-sm text-neutral-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
