"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/use-theme";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "system":
        return <Monitor className="h-4 w-4" />;
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case "light":
        return "Mudar para tema escuro";
      case "dark":
        return "Mudar para tema do sistema";
      case "system":
        return "Mudar para tema claro";
      default:
        return "Alternar tema";
    }
  };

  // Não renderizar até que o componente esteja montado no cliente
  if (!mounted) {
    return (
      <div className="h-9 w-9 bg-muted animate-pulse rounded-md" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 transition-all duration-200 hover:bg-accent"
      title={getTooltip()}
    >
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-200">
          {getIcon()}
        </div>
      </div>
    </Button>
  );
}
