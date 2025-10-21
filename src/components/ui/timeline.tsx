"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  bg-gradient-to-b from-white to-emerald-50 dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I've been working on Aceternity for the past 2 years. Here's
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const start = index / data.length;
          const end = (index + 1) / data.length;

          return (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
              start={start}
              end={end}
            />
          );
        })}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-emerald-200 via-emerald-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({
  item,
  index,
  scrollYProgress,
  start,
  end,
}: {
  item: TimelineEntry;
  index: number;
  scrollYProgress: any;
  start: number;
  end: number;
}) => {
  const isEven = index % 2 === 0;

  // Calculate opacity for sticky title based on scroll position
  const titleOpacity = useTransform(
    scrollYProgress,
    [start - 0.5, start, end - 0.1, end],
    [0.4, 1, 1, 0.4]
  );

  const titleScale = useTransform(
    scrollYProgress,
    [start - 0.05, start, end - 0.1, end],
    [0.8, 1, 1, 0.8]
  );

  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      {/* Sticky Circle with Year - Desktop Only */}
      <motion.div
        style={{
          opacity: titleOpacity,
          scale: titleScale,
        }}
        className="sticky top-10 z-40 flex flex-col md:flex-row items-start md:items-center"
      >
        <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full ${isEven ? 'bg-emerald-500' : 'bg-amber-500'
          } dark:bg-black flex items-center justify-center`}>
          <div className={`h-4 w-4 rounded-full ${isEven ? 'bg-emerald-300' : 'bg-amber-300'
            } dark:bg-neutral-800 border ${isEven ? 'border-emerald-700' : 'border-amber-700'
            } dark:border-neutral-700 p-2`} />
        </div>
        <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${isEven ? 'text-emerald-500' : 'text-amber-500'
          } dark:text-neutral-500`}>
          {item.title}
        </h3>
      </motion.div>

      {/* Content */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold ${isEven ? 'text-emerald-500' : 'text-amber-500'
          } dark:text-neutral-500`}>
          {item.title}
        </h3>
        {item.content}
      </div>
    </div>
  );
};