import { LucideIcon } from "lucide-react";

export interface ReviewResultProps {
  data: {
    score: number;
    summary: string;
    strengths: string[];
    weaknesses: string[];
    actionItems: string[];
    keywords: string[];
  };
}

export interface ReviewResultSquareProps {
  data: string[];
  Icon: LucideIcon;
  title: string;
  color: string;
}