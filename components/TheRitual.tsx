import React from "react";
import Image from "next/image";
import { Clock, Droplets, Check, Smartphone, Sparkles, ArrowRight } from "lucide-react";

export function TheRitual() {
  const steps = [
    {
      step: "01",
      time: "07:00 AM",
      action: "Wake & Hydrate",
      title: "Pour 250–300ml of Filtered Water",
      description:
        "Consume immediately upon waking on an empty stomach. Chilled or room-temperature water primes gastric lining for rapid polyphenol absorption.",
      indicator: "Empty Stomach Window",
    },
    {
      step: "02",
      time: "07:01 AM",
      action: "Measure & Whisk",
      title: "Add 1 Precision Scoop (10g)",
      description:
        "One level scoop provides 280mg natural Vitamin C and 1,200mg active tannoids. Shake or whisk for 10 seconds. Crisp, astringent, tart botanical finish.",
      indicator: "50 Servings per 500g Pouch",
    },
    {
      step: "03",
      time: "07:02 AM",
      action: "Track & Habituate",
      title: "Log Streak in the Companion App",
      description:
        "Tap to check off your daily morning dose. The app starts your 30-minute bio-absorption timer and keeps your unbroken 60-day longevity streak alive.",
      indicator: "Daily Habit Protocol",
    },
  ];

  return (
    <section id="ritual" className="py-20 lg:py-28 bg-white border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
            The Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
            30 Seconds Every Morning. Lifelong Cellular Vitality.
          </h2>
          <p className="text-base text-[#4e5e57] mt-3 leading-relaxed">
            Engineered as the simplest, most potent foundational ritual in your day. No complex pill organizers, no artificial sweeteners—just pure cellular renewal before the world wakes up.
          </p>
        </div>

        {/* 2-Column: Left Side Steps, Right Side Ritual Lifestyle Image */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Steps Column */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#f8faf8] hover:bg-[#f0f4f1] border border-[#e2e8e4] rounded-2xl p-6 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold bg-[#041f18] text-[#10b981] px-2.5 py-1 rounded-md">
                      STEP {item.step}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#059669] bg-[#e8f5e9] px-2.5 py-1 rounded-md">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#798b83] uppercase tracking-wider">
                    {item.indicator}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#041f18] group-hover:text-[#0f3e33] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4e5e57] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-[#e2e8e4]">
              <Image
                src="/images/ritual-prep.jpg"
                alt="Amla-1 Morning Ritual on marble kitchen counter with shaker and scoop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Floating Protocol Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#e2e8e4] shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#059669]">
                    Optimal Bioavailability
                  </div>
                  <div className="text-sm font-bold text-[#041f18] mt-0.5">
                    Consume 20–30 mins before first meal or coffee
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#041f18] text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#10b981]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
