"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does Amla-1 taste like?",
      a: "Amla-1 tastes clean, sharp, and tart with a refreshing botanical astringency. Unlike synthetic supplements flavored with cloying stevia or artificial berry flavorings, Amla-1 has a crisp, natural sour-sweet profile native to pure Indian gooseberry. Most members look forward to the morning sensory reset—it instantly awakens the palate.",
    },
    {
      q: "Why is a 100% single ingredient better than multi-ingredient green powders?",
      a: "Most 75-ingredient green powders 'fairy-dust' trace amounts of dozens of herbs so they can put them on the label, but none are clinically dosed. Furthermore, competing micronutrients hinder absorption. Amla-1 takes the world's most potent botanical super-antioxidant and delivers an efficacious 10g clinical dose with 280mg whole-food Vitamin C, 3.8g prebiotic fiber, and standardized emblicanin tannins.",
    },
    {
      q: "How long does the 500g pouch last?",
      a: "Each 500g pouch contains exactly 50 daily servings (10g per level scoop). That provides nearly two full months (7+ weeks) of uninterrupted morning protocol for just ₹500 (or ₹450 with subscription—under ₹9 a day).",
    },
    {
      q: "When is the optimal time to consume Amla-1?",
      a: "First thing in the morning upon waking, mixed with 250–300ml of cold or ambient filtered water on an empty stomach. We recommend waiting 20 to 30 minutes before drinking hot coffee or consuming breakfast to allow the polyphenols and prebiotic fibers to fully coat and absorb through the gastric lining.",
    },
    {
      q: "Are there really zero added sugars or preservatives?",
      a: "Yes. Our ingredient label lists only one item: 100% Pure Organic Freeze-Dried Indian Gooseberry (Emblica officinalis). There are zero added sugars, zero maltodextrin, zero silicon dioxide anticaking agents, and zero preservatives. The 0.4g of sugar shown on the supplement facts is naturally occurring whole fruit fructose.",
    },
    {
      q: "How do I get access to the Amla-1 Companion App?",
      a: "Lifetime Pro Access to the Amla-1 Companion App is included free with every order. Once you checkout, you will receive an instant download link via SMS and email, plus a QR code printed directly on the back of your 500g pouch to sync your habit streak.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#e2e8e4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
            Everything You Need to Know.
          </h2>
          <p className="text-sm text-[#4e5e57] mt-2">
            Clinical clarity on ingredients, the morning protocol, and cellular bio-availability.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-12 divide-y divide-[#e2e8e4] border-y border-[#e2e8e4]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-[#041f18] hover:text-[#059669] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="p-1 rounded-full bg-[#f0f4f1] text-[#041f18] shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#059669]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-[#4e5e57] leading-relaxed pr-8 animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
