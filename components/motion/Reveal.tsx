"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.14,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`will-change-transform transition duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-sm"
      } ${className}`}
      data-reveal={isVisible ? "visible" : "hidden"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
