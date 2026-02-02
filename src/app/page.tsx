import { Header } from "@/components/layout/Header";
import { MainProcessor } from "@/components/MainProcessor";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto px-4 mt-20 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Get AI-Powered Feedback
            <br />
            on Your <span className="text-primary">Resume & Portfolio</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Upload your resume or portfolio content and receive instant, actionable feedback
            to help you land your dream job.
          </p>
        </div>

        <MainProcessor />
      </main>

      <Footer />
    </div>
  );
}
