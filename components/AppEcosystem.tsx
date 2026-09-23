import React from "react";
import Image from "next/image";
import { Smartphone, Zap, Flame, Award, Calendar, CheckCircle, Bell, ArrowRight } from "lucide-react";

export function AppEcosystem() {
  const appFeatures = [
    {
      icon: Flame,
      title: "Circadian Streak Tracker",
      desc: "Consistency is the actual active ingredient. Build an unbroken 30, 60, and 90-day morning protocol with intelligent morning reminders.",
    },
    {
      icon: Zap,
      title: "Bioavailability Absorption Timer",
      desc: "Amla's polyphenols absorb best in a fasted state. The app starts a 30-minute countdown so you know precisely when your gut is primed for coffee or breakfast.",
    },
    {
      icon: Award,
      title: "Cellular Biomarker Logs",
      desc: "Log hair follicle shedding, skin hydration glow score, and morning digestive transit to see tangible biomarker improvements across each 50-day cycle.",
    },
    {
      icon: Calendar,
      title: "Smart Scoop Auto-Sync",
      desc: "The app monitors your remaining 50 servings in real time. Refills ship automatically before you reach your last scoop—pause or skip anytime.",
    },
  ];

  return (
    <section id="app" className="py-20 lg:py-28 bg-[#f4f7f5] border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Smartphone Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative aspect-square w-full max-w-md sm:max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#e2e8e4] bg-white group">
              <Image
                src="/images/app-mockup.jpg"
                alt="Amla-1 Companion App UI showing 42 Day Streak and biomarker tracking on iPhone"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle top indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-1.5 text-[#10b981]">
                  <CheckCircle className="w-3.5 h-3.5" /> Amla-1 OS Sync
                </span>
                <span className="text-[#a3b8b0]">iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Feature Highlights */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
              The Digital Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
              Data-Driven Wellness. <br />
              <span className="text-[#059669]">The Amla-1 Companion App.</span>
            </h2>
            <p className="text-base text-[#4e5e57] mt-3 leading-relaxed">
              Powder alone doesn&apos;t create transformation—daily adherence does. We built the Amla-1 Companion App to turn high-performance cellular nutrition into an effortless, quantifiable daily habit.
            </p>

            {/* Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-[#e2e8e4] shadow-xs hover:border-[#059669] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#e8f5e9] text-[#059669] flex items-center justify-center mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#041f18]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#4e5e57] mt-1.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* App Access Callout */}
            <div className="mt-6 p-4 rounded-xl bg-[#041f18] text-white flex items-center justify-between border border-[#0f3e33]">
              <div>
                <div className="text-xs font-mono text-[#10b981] font-bold">
                  PRO MEMBERSHIP INCLUDED
                </div>
                <div className="text-sm font-medium text-[#d4e9e2] mt-0.5">
                  Free Lifetime Access included with every Amla-1 order
                </div>
              </div>
              <span className="text-xs font-mono font-bold bg-[#10b981] text-[#041f18] px-3 py-1.5 rounded-lg">
                ₹0 Cost
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
