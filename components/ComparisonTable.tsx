import React from "react";
import { Check, X, Minus } from "lucide-react";

export function ComparisonTable() {
  const comparisonRows = [
    {
      metric: "Single Ingredient Purity",
      amla1: "100% Pure Cold-Milled Amla",
      synth: "Synthetic ascorbic acid + binders",
      generic: "Sun-dried amla + sand/impurities",
      greens: "75+ micro-dosed blends & stevia",
    },
    {
      metric: "Bio-Availability & Plasma Retention",
      amla1: "4x Longer (Bound to Tannins)",
      synth: "Rapid urinary excretion in 2h",
      generic: "Moderate (Heat oxidized)",
      greens: "Variable nutrient competition",
    },
    {
      metric: "Natural Vitamin C per Serving",
      amla1: "280 mg (Whole Food Complex)",
      synth: "1000 mg (Isolated synthetic)",
      generic: "Unstandardized (60–120 mg)",
      greens: "100–300 mg",
    },
    {
      metric: "Soluble Prebiotic Fiber (Gut Health)",
      amla1: "3.8g per 10g scoop",
      synth: "0.0g",
      generic: "Coarse insoluble fiber only",
      greens: "1.0–2.0g",
    },
    {
      metric: "Zero Added Sugar & Fillers",
      amla1: true,
      synth: false,
      generic: true,
      greens: false,
    },
    {
      metric: "Dedicated Habit Companion App",
      amla1: true,
      synth: false,
      generic: false,
      greens: false,
    },
    {
      metric: "Cost per Daily Serving",
      amla1: "₹9 – ₹10 / day",
      synth: "₹15 – ₹25 / day",
      generic: "₹8 – ₹12 / day",
      greens: "₹250+ / day",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
            Comparative Superiority
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
            How Amla-1 Outperforms the Market.
          </h2>
          <p className="text-base text-[#4e5e57] mt-3 leading-relaxed">
            Stop overpaying for under-dosed 75-ingredient green powders or taking synthetic isolated chemicals that your body can&apos;t absorb.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-[#041f18]">
                <th className="py-4 px-4 text-xs font-mono uppercase text-[#798b83] w-1/4">
                  Feature / Compound
                </th>
                <th className="py-4 px-4 text-sm font-bold text-white bg-[#041f18] rounded-t-xl w-1/4">
                  <div className="flex items-center justify-between">
                    <span>Amla-1™</span>
                    <span className="text-[10px] font-mono bg-[#10b981] text-[#041f18] px-2 py-0.5 rounded font-extrabold">
                      WINNER
                    </span>
                  </div>
                </th>
                <th className="py-4 px-4 text-xs font-semibold text-[#4e5e57] w-1/6">
                  Synthetic Vit C Pills
                </th>
                <th className="py-4 px-4 text-xs font-semibold text-[#4e5e57] w-1/6">
                  Generic Ayurvedic Churna
                </th>
                <th className="py-4 px-4 text-xs font-semibold text-[#4e5e57] w-1/6">
                  Imported Greens Powders
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8e4] text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#f8faf8] transition-colors">
                  <td className="py-4 px-4 font-semibold text-[#041f18]">
                    {row.metric}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#041f18] bg-[#f0f4f1] border-x border-[#d4e9e2]">
                    {typeof row.amla1 === "boolean" ? (
                      <span className="inline-flex items-center gap-1 text-[#059669]">
                        <Check className="w-4 h-4 stroke-[3]" /> Yes (Guaranteed)
                      </span>
                    ) : (
                      row.amla1
                    )}
                  </td>
                  <td className="py-4 px-4 text-[#4e5e57]">
                    {typeof row.synth === "boolean" ? (
                      row.synth ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )
                    ) : (
                      row.synth
                    )}
                  </td>
                  <td className="py-4 px-4 text-[#4e5e57]">
                    {typeof row.generic === "boolean" ? (
                      row.generic ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )
                    ) : (
                      row.generic
                    )}
                  </td>
                  <td className="py-4 px-4 text-[#4e5e57]">
                    {typeof row.greens === "boolean" ? (
                      row.greens ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )
                    ) : (
                      row.greens
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
