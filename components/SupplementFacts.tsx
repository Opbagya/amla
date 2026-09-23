"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Sparkles, AlertCircle, FileText } from "lucide-react";

export function SupplementFacts() {
  const [viewMode, setViewMode] = useState<"serving" | "pouch">("serving");

  return (
    <section id="nutrition" className="py-20 lg:py-28 bg-white border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
            Exhaustive Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
            One Single Ingredient. Zero Fillers.
          </h2>
          <p className="text-base text-[#4e5e57] mt-3 leading-relaxed">
            Most supplements hide behind proprietary blends, maltodextrin bulking agents, and artificial flavorings. Amla-1 contains exactly one thing: pure, cold-dehydrated wild Amla fruit.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Official Supplement Facts Box */}
          <div className="lg:col-span-7 bg-[#fbfdfb] rounded-2xl border-2 border-[#041f18] p-6 sm:p-8 font-sans shadow-md">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between pb-4 border-b-4 border-[#041f18]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#041f18] tracking-tight uppercase font-[family-name:var(--font-display)]">
                  Supplement Facts
                </h3>
                <p className="text-xs text-[#4e5e57] mt-0.5">
                  Serving Size: 1 Level Scoop (10g) | Servings Per Container: 50 (500g Net Wt)
                </p>
              </div>

              {/* Toggle serving vs pouch */}
              <div className="flex bg-[#e2e8e4] p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setViewMode("serving")}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                    viewMode === "serving"
                      ? "bg-[#041f18] text-white shadow-xs"
                      : "text-[#4e5e57] hover:text-[#041f18]"
                  }`}
                >
                  Per 10g Scoop
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("pouch")}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors cursor-pointer ${
                    viewMode === "pouch"
                      ? "bg-[#041f18] text-white shadow-xs"
                      : "text-[#4e5e57] hover:text-[#041f18]"
                  }`}
                >
                  Per 500g Pouch
                </button>
              </div>
            </div>

            {/* Calories Row */}
            <div className="flex justify-between items-baseline py-2.5 border-b border-[#041f18] font-bold text-sm sm:text-base">
              <span>Calories</span>
              <span className="font-mono text-lg text-[#041f18]">
                {viewMode === "serving" ? "27 kcal" : "1,350 kcal"}
              </span>
            </div>

            <div className="text-right text-[11px] font-bold text-[#4e5e57] py-1 border-b border-[#e2e8e4]">
              % Daily Value*
            </div>

            {/* Nutrient Rows */}
            <div className="divide-y divide-[#e2e8e4] text-xs sm:text-sm">
              <div className="flex justify-between py-2">
                <span>
                  <strong className="text-[#041f18]">Total Fat</strong>{" "}
                  {viewMode === "serving" ? "0g" : "2.5g"}
                </span>
                <span className="font-mono font-semibold">0%</span>
              </div>

              <div className="flex justify-between py-2 pl-4 text-[#4e5e57]">
                <span>Saturated Fat 0g</span>
                <span className="font-mono">0%</span>
              </div>

              <div className="flex justify-between py-2">
                <span>
                  <strong className="text-[#041f18]">Sodium</strong>{" "}
                  {viewMode === "serving" ? "1.5mg" : "75mg"}
                </span>
                <span className="font-mono font-semibold">&lt; 1%</span>
              </div>

              <div className="flex justify-between py-2">
                <span>
                  <strong className="text-[#041f18]">Total Carbohydrates</strong>{" "}
                  {viewMode === "serving" ? "6.8g" : "340g"}
                </span>
                <span className="font-mono font-semibold">
                  {viewMode === "serving" ? "2.5%" : "124%"}
                </span>
              </div>

              <div className="flex justify-between py-2 pl-4 text-[#041f18] font-medium">
                <span>
                  Dietary Fiber (Prebiotic Pectin){" "}
                  {viewMode === "serving" ? "3.8g" : "190g"}
                </span>
                <span className="font-mono font-bold text-[#059669]">
                  {viewMode === "serving" ? "14%" : "680%"}
                </span>
              </div>

              <div className="flex justify-between py-2 pl-4 text-[#4e5e57]">
                <span>
                  Total Sugars (Natural fruit sugar only){" "}
                  {viewMode === "serving" ? "0.4g" : "20g"}
                </span>
                <span className="font-mono">†</span>
              </div>

              <div className="flex justify-between py-2 pl-8 text-[#059669] font-semibold">
                <span>Includes 0g Added Sugars</span>
                <span className="font-mono font-bold">0%</span>
              </div>

              <div className="flex justify-between py-2">
                <span>
                  <strong className="text-[#041f18]">Protein</strong> (Natural amino acids){" "}
                  {viewMode === "serving" ? "0.25g" : "12.5g"}
                </span>
                <span className="font-mono font-semibold">&lt; 1%</span>
              </div>

              <div className="flex justify-between py-2 bg-[#f0f4f1] px-2 rounded font-bold text-[#041f18]">
                <span>
                  Vitamin C (as Bio-Complexed L-Ascorbic Acid){" "}
                  {viewMode === "serving" ? "280mg" : "14,000mg"}
                </span>
                <span className="font-mono text-[#059669] font-extrabold">
                  {viewMode === "serving" ? "311%" : "15,550%"}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span>Iron (Natural) {viewMode === "serving" ? "1.2mg" : "60mg"}</span>
                <span className="font-mono font-semibold">
                  {viewMode === "serving" ? "7%" : "330%"}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span>Potassium {viewMode === "serving" ? "185mg" : "9,250mg"}</span>
                <span className="font-mono font-semibold">
                  {viewMode === "serving" ? "4%" : "200%"}
                </span>
              </div>
            </div>

            {/* Standardized Bio-Active Matrix */}
            <div className="mt-4 pt-3 border-t-2 border-[#041f18]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#041f18]">
                Standardized Bio-Active Phytochemical Profile †
              </div>
              <div className="mt-2 space-y-1.5 text-xs">
                <div className="flex justify-between text-[#0f3e33] font-medium">
                  <span>Total Active Tannoids (Emblicanin A & B, Punigluconin)</span>
                  <span className="font-mono font-bold">
                    {viewMode === "serving" ? "1,200 mg" : "60,000 mg"}
                  </span>
                </div>
                <div className="flex justify-between text-[#4e5e57]">
                  <span>Gallic Acid (Free & Bound Phenolics)</span>
                  <span className="font-mono font-semibold">
                    {viewMode === "serving" ? "180 mg" : "9,000 mg"}
                  </span>
                </div>
                <div className="flex justify-between text-[#4e5e57]">
                  <span>Ellagic Acid (Natural Antioxidant Complex)</span>
                  <span className="font-mono font-semibold">
                    {viewMode === "serving" ? "140 mg" : "7,000 mg"}
                  </span>
                </div>
              </div>
            </div>

            {/* Footnote */}
            <div className="mt-4 pt-3 border-t border-[#041f18] text-[10px] text-[#798b83] leading-tight">
              * Percent Daily Values are based on a 2,000 calorie diet. <br />
              † Daily Value not established.
            </div>
          </div>

          {/* Right Column: Ingredient Integrity Verification */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* The Ingredient List Card */}
            <div className="bg-[#f8faf8] border border-[#e2e8e4] rounded-2xl p-6 sm:p-8">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#059669]">
                Ingredient Statement
              </span>
              <h4 className="text-xl font-bold text-[#041f18] mt-1 font-[family-name:var(--font-display)]">
                100% Pure Dried Amla
              </h4>
              <p className="text-xs font-mono text-[#4e5e57] mt-1">
                Botanical Name: <em>Phyllanthus emblica / Emblica officinalis</em>
              </p>

              <div className="mt-4 p-4 bg-white rounded-xl border border-[#e2e8e4] text-xs text-[#041f18] leading-relaxed">
                <strong>Ingredients:</strong> 100% Pure Organic Freeze-Dried Indian Gooseberry (Amla) Fruit Powder.
              </div>

              {/* What is NOT in it */}
              <div className="mt-5">
                <span className="text-xs font-bold text-[#041f18] uppercase tracking-wider">
                  The Zero-Tolerance Blacklist:
                </span>
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-[#4e5e57]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> 0g Added Sugars
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> No Maltodextrin
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> No Silicon Dioxide
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> No Artificial Flavors
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> No Stevia or Sucralose
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold">✕</span> No Preservatives
                  </div>
                </div>
              </div>
            </div>

            {/* Batch Testing Guarantee */}
            <div className="bg-[#041f18] text-white rounded-2xl p-6 border border-[#0f3e33]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#10b981]" />
                <h5 className="font-bold text-base text-white">
                  Triple Analytical Lab Verification
                </h5>
              </div>
              <p className="text-xs text-[#d4e9e2] mt-3 leading-relaxed">
                Every single 500g pouch undergoes strict ICP-MS heavy metal screening (Lead &lt; 0.05 ppm, Arsenic &lt; 0.02 ppm, Mercury non-detectable), HPLC polyphenol quantification, and microbial safety assay.
              </p>
              <div className="mt-4 pt-3 border-t border-[#0f3e33] flex items-center justify-between text-xs font-mono text-[#10b981]">
                <span>Certificate of Analysis: #AML-500-2026</span>
                <span>Passed ✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
