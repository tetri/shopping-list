"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "@/lib/use-theme";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeSelector() {
  const { theme, setTheme, mounted } = useTheme();

  const themes = [
    {
      value: "light" as const,
      label: "Claro",
      icon: Sun,
    },
    {
      value: "dark" as const,
      label: "Escuro",
      icon: Moon,
    },
    {
      value: "system" as const,
      label: "Sistema",
      icon: Monitor,
    },
  ];

  // Não renderizar até que o componente esteja montado no cliente
  if (!mounted) {
    return (
      <div className="w-[140px] h-9 bg-muted animate-pulse rounded-md" />
    );
  }

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[140px]">
        <SelectValue>
          {themes.map((themeOption) => {
            const Icon = themeOption.icon;
            if (themeOption.value === theme) {
              return (
                <div key={themeOption.value} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {themeOption.label}
                </div>
              );
            }
            return null;
          })}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <SelectItem key={themeOption.value} value={themeOption.value}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {themeOption.label}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
