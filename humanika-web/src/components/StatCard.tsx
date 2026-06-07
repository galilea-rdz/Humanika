"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export default function StatCard({ value, label, prefix = "", suffix = "" }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const count = useCountUp(numericValue, 2000, visible);

  return (
    <div
      ref={ref}
      className="bg-white rounded-[8px] p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#1173E4] mb-2">
        {prefix}
        {visible ? count.toLocaleString() : 0}
        {suffix}
      </div>
      <p className="text-[#5A6478] text-sm leading-relaxed">{label}</p>
    </div>
  );
}
