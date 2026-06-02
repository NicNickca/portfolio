"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = useTranslations("Navbar");

  const navLinks = [
    { name: t("about"), href: "#more-info" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
    { name: t("experience"), href: "#experience" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#about">
          <Card className="text-xl font-bold text-foreground hover:text-primary transition-colors px-2 py-1 rounded-sm">
            NMS
          </Card>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* <li>
            <Link href="#contact">
              <Card className="px-2 py-1 rounded-md ">{t("getInTouch")}</Card>
            </Link>
          </li> */}
          <li>
            <ModeToggle />
          </li>
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile  */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact">
                <Card className="px-2 py-1 rounded-md ">{t("getInTouch")}</Card>
              </Link>
            </li>
            <li className="flex justify-center pt-2">
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
