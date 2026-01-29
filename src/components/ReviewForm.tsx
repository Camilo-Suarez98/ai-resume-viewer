"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Loader2, Sparkles } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { SecondSelectorButton } from "./ui/SecondSelectorButton";

interface ReviewFormProps {
  type: "resume" | "portfolio";
  onSubmit: (data: { text: string; file?: File }) => void;
  isLoading: boolean;
}

export function ReviewForm({ type, onSubmit, isLoading }: ReviewFormProps) {
  const [mode, setMode] = useState<"text" | "file">("text");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
        ".docx",
      ],
      "text/plain": [".txt", ".md"],
    },
    maxFiles: 1,
  });

  const handleSubmit = () => {
    if (mode === "text" && !text.trim()) return;
    if (mode === "file" && !file) return;
    onSubmit({ text: mode === "text" ? text : "", file: mode === "file" ? file || undefined : undefined });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="flex items-center gap-1 p-1 bg-white/5 rounded-t-xl w-fit mx-auto sm:mx-0 sm:ml-4 translate-y-2 relative z-10">
        <SecondSelectorButton
          isActive={mode === "text"}
          onClick={() => setMode("text")}
          label="Paste Text"
        />
        <SecondSelectorButton
          isActive={mode === "file"}
          onClick={() => setMode("file")}
          label="Upload File"
        />
      </div>

      <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-purple-500/5 pointer-events-none" />

        <AnimatePresence mode="wait">
          {mode === "text" ? (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative"
            >
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Paste your ${type} content here...\n\nInclude your work experience, skills, projects, and any other relevant information you want reviewed.`}
                className="w-full h-64 bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 resize-none font-mono"
              />
              <div className="absolute bottom-4 right-4 text-xs text-neutral-500">
                {text.length} characters
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="file"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div
                {...getRootProps()}
                className={cn(
                  "w-full h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors",
                  isDragActive
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                )}
              >
                <input {...getInputProps()} />
                {file ? (
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                    <p className="text-white font-medium">{file.name}</p>
                    <p className="text-xs text-neutral-500 mt-2">
                      Click or drag to replace
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <Upload className="w-12 h-12 text-neutral-500 mx-auto mb-4" />
                    <p className="text-neutral-300 font-medium">
                      Drag & drop your file here
                    </p>
                    <p className="text-xs text-neutral-500 mt-2">
                      PDF, DOCX, TXT, MD
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSubmit}
        disabled={isLoading || (mode === "text" && !text) || (mode === "file" && !file)}
        className="w-full mt-6 bg-gradient-primary h-14 rounded-xl flex items-center justify-center gap-2 text-white font-semibold text-lg shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Sparkles className="w-5 h-5 fill-white" />
        )}
        <span>Get AI Review</span>
      </motion.button>
    </div>
  );
}
