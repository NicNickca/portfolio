"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function LanguageSelector({
  locale,
  languages,
  setIsMobileMenuOpen,
}: {
  locale: string;
  languages: {
    code: string;
    name: string;
  }[];
  setIsMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-primary hover:text-foreground justify-center"
        >
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            asChild
            className={locale === lang.code ? "bg-accent" : ""}
          >
            <Link
              href={`/${lang.code}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {lang.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
