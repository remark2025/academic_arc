
import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  border?: boolean;
  hoverEffect?: boolean;
}

const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  intensity = "medium",
  border = true,
  hoverEffect = false,
}) => {
  const getGlassClasses = () => {
    let baseClasses = "backdrop-blur rounded-xl";
    
    // Background intensity
    switch (intensity) {
      case "light":
        baseClasses += " bg-white/40 dark:bg-black/10";
        break;
      case "medium":
        baseClasses += " bg-white/60 dark:bg-black/20";
        break;
      case "strong":
        baseClasses += " bg-white/80 dark:bg-black/30";
        break;
    }
    
    // Border
    if (border) {
      baseClasses += " border border-white/20 dark:border-white/10";
    }
    
    // Hover effect
    if (hoverEffect) {
      baseClasses += " transition-all duration-300 hover:bg-white/70 dark:hover:bg-black/30 hover:shadow-lg";
    }
    
    return baseClasses;
  };

  return (
    <div className={cn(getGlassClasses(), className)}>
      {children}
    </div>
  );
};

export default GlassPanel;
