import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeAI - AI-Powered Resume & Portfolio Review",
  description: "Get instant, actionable feedback on your resume and portfolio using advanced AI.",
  twitter: {
    card: "summary_large_image",
    title: "ResumeAI - AI-Powered Resume & Portfolio Review",
    description: "Get instant, actionable feedback on your resume and portfolio using advanced AI.",
  },
  openGraph: {
    title: "ResumeAI - AI-Powered Resume & Portfolio Review",
    description: "Get instant, actionable feedback on your resume and portfolio using advanced AI.",
    url: "https://ai-resume-viewer.vercel.app",
    siteName: "ResumeAI",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
