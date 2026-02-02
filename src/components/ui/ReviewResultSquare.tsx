import { ReviewResultSquareProps } from "@/lib/types/ReviewResults.type";

export function ReviewResultSquare({ data, Icon, title }: ReviewResultSquareProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
        <Icon className={`w-5 h-5 ${title === "Areas for Improvement" ? "text-red-400" : "text-emerald-400"}`} />
        {title}
      </h3>
      <ul className="space-y-3">
        {data.map((item, i) => (
          <li key={i} className="flex gap-3 text-neutral-300 text-sm">
            <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${title === "Areas for Improvement" ? "bg-red-400" : "bg-emerald-400"}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};