"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 transition-colors hover:bg-accent-violet/10"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-accent-cyan transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-5 w-5 text-accent-violet transition-transform hover:-rotate-12" />
      )}
    </Button>
  );
}
