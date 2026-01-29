"use client";

import { useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewResult } from "./ReviewResult";
import { FeatureGrid } from "./FeatureGrid";
import { FileText, Briefcase } from "lucide-react";
import { SelectorButton } from "./ui/SelectorButton";

export function MainProcessor() {
  const [type, setType] = useState<"resume" | "portfolio">("resume");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

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

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Analysis failed with status ${res.status}`);
      }

      const json = await res.json();
      setResult(json);
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 p-1 rounded-xl mb-10">
        <SelectorButton
          isActive={type === "resume"}
          onClick={() => setType("resume")}
          icon={FileText}
          label="Resume"
        />
        <SelectorButton
          isActive={type === "portfolio"}
          onClick={() => setType("portfolio")}
          icon={Briefcase}
          label="Portfolio"
        />
      </div>

      <ReviewForm type={type} onSubmit={handleSubmit} isLoading={isLoading} />

      {result ? <ReviewResult data={result} /> : <FeatureGrid />}
    </div>
  );
}
