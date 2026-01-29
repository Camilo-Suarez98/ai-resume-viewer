export function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-neutral-600 border-t border-white/5 mt-20">
      <p>Your content is processed securely and never stored.</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
    </footer>
  );
}
