"use client";

import React, { useState } from "react";
import { Sparkles, Dna, Activity, ShieldCheck, Heart, Layers, ArrowUpRight } from "lucide-react";

export function BenefitsGrid() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const benefits = [
    {
      id: "hair",
      category: "Trichological Science",
      title: "Rapid Hair Growth & Follicle Longevity",
      headline: "DHT Inhibition & Capillary Micro-Perfusion",
      summary:
        "Standard hair treatments only treat the surface. Amla-1 delivers bio-active tannoids (Emblicanin A & B) directly to dermal papilla cells to inhibit 5-alpha reductase and sustain the anagen growth phase.",
      metrics: [
        { label: "5α-Reductase Modulation", val: "-38%", detail: "In vitro enzyme inhibition" },
        { label: "Hair Shaft Density", val: "+21%", detail: "Observed in 90-day protocol" },
        { label: "Active Compounds", val: "Emblicanin A & B", detail: "Standardized bio-tannins" },
      ],
      cellularPoints: [
        "Inhibits localized DHT conversion at the hair follicle root without hormonal side effects",
        "Stimulates Vascular Endothelial Growth Factor (VEGF) to deliver micronutrients to dormant follicles",
        "High bio-available iron and copper ions enhance melanin synthesis to prevent premature greying",
      ],
      timeline: "Days 30–60: Reduced shower shedding. Days 60–90: New baby follicle emergence along hairline.",
    },
    {
      id: "skin",
      category: "Dermal Matrix",
      title: "Endogenous Collagen & Epidermal Glow",
      headline: "Enzymatic Triple-Helix Stabilization",
      summary:
        "Unlike synthetic ascorbic acid that rapidly flushes out in urine, Amla-1's whole-food Vitamin C complex is bound to natural bioflavonoids, keeping plasma saturation elevated 4x longer for deep dermal collagen cross-linking.",
      metrics: [
        { label: "Collagen Pro-Hydroxylase", val: "3.2x", detail: "Enzymatic cofactor rate" },
        { label: "Natural Vitamin C", val: "280mg", detail: "311% DV per single scoop" },
        { label: "MMP-1 Degradation", val: "-42%", detail: "Elastin breakdown reduction" },
      ],
      cellularPoints: [
        "Essential molecular cofactor for lysyl and prolyl hydroxylase—the enzymes required to build firm human collagen",
        "Potent ellagitannins neutralize UV-induced Reactive Oxygen Species (ROS) to prevent collagen breakdown",
        "Suppresses tyrosinase activity to fade stubborn hyperpigmentation and reveal radiant morning tone",
      ],
      timeline: "Days 7–14: Increased epidermal hydration. Days 30+: Noticeable skin elasticity and natural radiance.",
    },
    {
      id: "gut",
      category: "Digestive & Detox",
      title: "Gut Microbiome & Morning Motility Flush",
      headline: "Selective Prebiotic Fuel for Akkermansia",
      summary:
        "The first sip of water upon waking determines your metabolic day. Amla-1 delivers 3.8g of pure soluble dietary fiber and polyphenolic tannins that prime digestive peristalsis and fortify the gut barrier.",
      metrics: [
        { label: "Prebiotic Fiber", val: "3.8g", detail: "Per 10g morning serving" },
        { label: "Added Sugar", val: "0.0g", detail: "Zero glycemic or insulin spike" },
        { label: "Microbial Diversity", val: "Optimized", detail: "Fuels Akkermansia muciniphila" },
      ],
      cellularPoints: [
        "Natural organic fruit acids stimulate healthy bile flow and kickstart gastric motility without cramping",
        "Micro-milled prebiotic fibers feed short-chain fatty acid (SCFA) producing bacteria in the colon",
        "Strengthens tight junction proteins (Claudin-1) in the intestinal mucosa to prevent leaky gut endotoxemia",
      ],
      timeline: "Day 1: Effortless, clockwork morning elimination. Days 14+: Complete reduction in post-meal bloating.",
    },
    {
      id: "cellular",
      category: "Cellular Bio-Hacking",
      title: "Mitochondrial Longevity & Autophagy",
      headline: "Cascade Antioxidant Defense with 260k ORAC",
      summary:
        "Most antioxidants die after neutralizing a single free radical. Amla's unique emblicanins trigger a multi-tier 'recycling cascade' that neutralizes multiple radical molecules consecutively for all-day cellular protection.",
      metrics: [
        { label: "ORAC Antioxidant Score", val: "261,500+", detail: "µmol TE/100g (Highest of any fruit)" },
        { label: "Trace Chromium", val: "Active", detail: "Modulates insulin receptor sensitivity" },
        { label: "Mitochondrial ROS", val: "-54%", detail: "Cellular oxidative stress reduction" },
      ],
      cellularPoints: [
        "Cascading antioxidant mechanism: Emblicanin A converts into Emblicanin B, maintaining cellular defense",
        "Naturally occurring trivalent chromium complexes optimize cellular glucose uptake and curb morning cravings",
        "Activates AMPK and Nrf2 pathways, promoting mitochondrial biogenesis and healthy cellular autophagy",
      ],
      timeline: "Hours 1–4: Steady non-jittery cognitive clarity. Months 1–3: Sustained cellular vitality biomarkers.",
    },
  ];

  return (
    <section id="science" className="py-20 lg:py-28 bg-[#f8faf8] border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
            The Molecular Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
            Clinical Efficacy at the Cellular Level.
          </h2>
          <p className="text-base text-[#4e5e57] mt-3 leading-relaxed">
            Amla isn&apos;t just another generic supplement. It is nature&apos;s most concentrated molecular storehouse of bio-available Vitamin C, gallotannins, and flavonoids.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-[#eff3ef] rounded-xl border border-[#e2e8e4] gap-1 overflow-x-auto max-w-full">
            {benefits.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#041f18] text-white shadow-sm"
                    : "text-[#4e5e57] hover:text-[#041f18] hover:bg-white/60"
                }`}
              >
                {b.title.split("&")[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Panel */}
        <div className="mt-10 bg-white rounded-3xl border border-[#e2e8e4] p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Description & Mechanism */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#059669] uppercase tracking-wider bg-[#e8f5e9] px-2.5 py-1 rounded">
                  {benefits[activeTab].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#041f18] mt-3 font-[family-name:var(--font-display)]">
                  {benefits[activeTab].title}
                </h3>
                <h4 className="text-base font-semibold text-[#0f3e33] mt-1">
                  {benefits[activeTab].headline}
                </h4>
                <p className="text-sm sm:text-base text-[#4e5e57] mt-4 leading-relaxed">
                  {benefits[activeTab].summary}
                </p>

                {/* Cellular Bullet Points */}
                <div className="mt-6 space-y-3">
                  {benefits[activeTab].cellularPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#f0f4f1] text-[#059669] flex items-center justify-center shrink-0 mt-0.5 border border-[#d4e9e2]">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#0d1714] leading-normal font-medium">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Protocol Timeline Pill */}
              <div className="mt-8 bg-[#f4f7f5] rounded-xl p-4 border border-[#e2e8e4]">
                <div className="text-[11px] font-mono uppercase font-bold text-[#059669]">
                  Observed Timeline
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#041f18] mt-1">
                  {benefits[activeTab].timeline}
                </div>
              </div>
            </div>

            {/* Right Column: Clinical Metrics Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#041f18] text-white rounded-2xl p-6 sm:p-8 border border-[#0f3e33]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#10b981]">
                  Clinical Assay Data
                </span>
                <div className="mt-6 space-y-6">
                  {benefits[activeTab].metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="pb-5 border-b border-[#0f3e33]/80 last:border-0 last:pb-0"
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs sm:text-sm text-[#d4e9e2] font-medium">
                          {m.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#10b981] font-mono">
                          {m.val}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#798b83] mt-1 font-mono">
                        {m.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lab Certification Stamp */}
              <div className="border border-[#e2e8e4] rounded-2xl p-5 bg-[#f8faf8] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#059669] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#041f18]">
                    Chromatography Verified
                  </div>
                  <div className="text-[11px] text-[#4e5e57]">
                    Every 500g pouch is verified via HPLC for active gallotannin density.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
