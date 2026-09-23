import React from "react";
import { CheckCircle2, ShieldAlert, Zap, Droplets, FlaskConical, Award } from "lucide-react";

export function TrustBanner() {
  const pillars = [
    {
      title: "100% Single Ingredient",
      desc: "Pure Dried Amla (Emblica officinalis). No silicon dioxide, maltodextrin, or sweeteners.",
      tag: "Pure",
    },
    {
      title: "30x Vitamin C vs Citrus",
      desc: "Naturally bound to protective bioflavonoids for superior plasma retention.",
      tag: "Potency",
    },
    {
      title: "Sub-40°C Cold Milling",
      desc: "Protects delicate heat-sensitive polyphenols, emblicanin, and gallic acids.",
      tag: "Process",
    },
    {
      title: "0g Added Sugar & Fillers",
      desc: "Zero glycemic spike. Fasting-safe and ketogenic morning compliant.",
      tag: "Clean",
    },
    {
      title: "Third-Party Tested",
      desc: "Triple-certified for heavy metals, microbial safety, and active compound assays.",
      tag: "Clinical",
    },
  ];

  return (
    <section className="bg-[#f4f7f5] py-8 border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-l-2 border-[#059669] pl-3.5"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#059669] font-bold">
                  {item.tag}
                </span>
                <h3 className="text-sm font-bold text-[#041f18] mt-0.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4e5e57] mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
