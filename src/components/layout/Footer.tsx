export function Footer() {
  return (
    <footer className="py-8 text-center text-xs text-neutral-400 border-t border-white/5 mt-20">
      <p>Your content is processed securely and never stored.</p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} Powered by <a className="transition duration-300 ease-in-out hover:text-primary" href="https://github.com/Camilo-Suarez98" target="_blank" rel="noopener noreferrer">Camilo Suarez</a>. All rights reserved.
      </p>
    </footer>
  );
}
