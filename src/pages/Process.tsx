import React, { forwardRef } from "react";
import { processSteps } from "../data/constants";

interface ProcessProps {}

const Process = forwardRef<HTMLDivElement, ProcessProps>((props, ref) => {
  return (
    <section ref={ref} className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <span className="text-emerald-800 font-bold text-sm">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Farm to Export</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent supply chain ensuring quality at every step
          </p>
        </div>

        <div className="relative">
          <div className="space-y-12 lg:space-y-24 relative z-10">
            {processSteps.map((step: any, index: number) => {
              // use 1-based step index when cycling colors
              const bucket = (index + 1) % 3;
              const bgGradient =
                bucket === 1
                  ? "from-emerald-100 to-emerald-200"
                  : bucket === 2
                  ? "from-amber-100 to-amber-200"
                  : "from-blue-100 to-blue-200";

              const layoutClass = index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse";

              return (
                <div
                  key={index}
                  className={`process-step flex flex-col ${layoutClass} items-center gap-8 lg:gap-16`}
                >
                  <div className="flex-1 bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 shadow-xl border-2 border-emerald-100 relative z-20">
                    <div className="inline-block px-4 py-2 bg-emerald-600 text-white font-black text-sm rounded-full mb-4">
                      STEP {step.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="relative flex-shrink-0 z-30">
                    <div className="w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-2xl z-30 relative">
                      <span className="text-3xl lg:text-5xl font-black text-white">{step.number}</span>
                    </div>
                    {/* decorative glow - put behind the circle but not too far behind */}
                    <div className="absolute -inset-4 bg-emerald-200 rounded-full opacity-30 blur-xl z-10" />
                  </div>

                  <div className="flex-1 lg:block hidden z-10">
                    <div className={`w-full h-64 bg-gradient-to-br ${bgGradient} rounded-3xl shadow-xl`} >
                      <img src={step.image} className="rounded-3xl h-full w-full" alt="makhana image" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

Process.displayName = "Process";

export default Process;
