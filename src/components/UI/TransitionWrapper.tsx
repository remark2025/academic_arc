
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-in" | "slide-up" | "slide-down" | "scale-up";

interface TransitionWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  duration = 700,
  once = true,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, once]);

  const getAnimationClasses = (): string => {
    const baseClasses = "transition-all";
    
    const durationClass = `duration-[${duration}ms]`;
    
    let stateClasses = isVisible
      ? "opacity-100"
      : "opacity-0";
      
    switch (animation) {
      case "fade-in":
        return cn(baseClasses, durationClass, stateClasses);
      case "slide-up":
        stateClasses += isVisible ? " translate-y-0" : " translate-y-8";
        return cn(baseClasses, durationClass, stateClasses);
      case "slide-down":
        stateClasses += isVisible ? " translate-y-0" : " -translate-y-8";
        return cn(baseClasses, durationClass, stateClasses);
      case "scale-up":
        stateClasses += isVisible ? " scale-100" : " scale-95";
        return cn(baseClasses, durationClass, stateClasses);
      default:
        return cn(baseClasses, durationClass, stateClasses);
    }
  };
  
  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default TransitionWrapper;
