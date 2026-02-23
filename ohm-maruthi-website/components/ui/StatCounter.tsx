"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  className?: string;
}

export function StatCounter({
  end,
  duration = 2000,
  suffix = "",
  label,
  className
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (easeOutExpo)
      // 1 - pow(2, -10 * t)
      const easeOut = (x: number): number => {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
      };

      setCount(Math.floor(easeOut(percentage) * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={elementRef}
      className={cn("text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm", className)}
    >
      <div className="text-4xl md:text-5xl font-bold text-[#1E5AA8] mb-2 tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-[#1E5AA8]/80 font-medium uppercase tracking-wider text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}
