"use client";

import { useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewResult } from "./ReviewResult";
import { FeatureGrid } from "./FeatureGrid";
import { FileText, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function MainProcessor() {
  const [type, setType] = useState<"resume" | "portfolio">("resume");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null); // Type this properly if sharing types

  const handleSubmit = async (data: { text: string; file?: File }) => {
    setIsLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("mode", data.file ? "file" : "text");
      if (data.text) formData.append("text", data.text);
      if (data.file) formData.append("file", data.file);

      const res = await fetch("/api/review", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Analysis failed");

      const json = await res.json();
      setResult(json);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-12">
      {/* Type Toggle */}
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-xl mb-10">
        <button
          onClick={() => setType("resume")}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all",
            type === "resume"
              ? "bg-[#1f2937] text-white shadow-lg border border-white/5"
              : "text-muted-foreground hover:text-white"
          )}
        >
          <FileText className="w-4 h-4" />
          Resume
        </button>
        <button
          onClick={() => setType("portfolio")}
          className={cn(
            "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all",
            type === "portfolio"
              ? "bg-[#10b981] text-white shadow-lg"
              : "text-muted-foreground hover:text-white"
          )}
        >
          <Briefcase className="w-4 h-4" />
          Portfolio
        </button>
      </div>

      <ReviewForm type={type} onSubmit={handleSubmit} isLoading={isLoading} />

      {result ? <ReviewResult data={result} /> : <FeatureGrid />}
    </div>
  );
}
