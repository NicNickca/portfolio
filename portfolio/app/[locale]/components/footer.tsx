import { ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nicolai Marlon Schirmer
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUp />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
