"use client";

import React, { useState } from "react";
import { Star, CheckCircle, ThumbsUp, Filter } from "lucide-react";

export function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const reviews = [
    {
      name: "Dr. Vikram M.",
      role: "Biochemistry Researcher & Biohacker",
      rating: 5,
      days: "Day 94 Protocol",
      category: "Hair Growth",
      date: "3 days ago",
      title: "Noticeable hair follicle thickening and zero gastric distress",
      text: "Most hair supplements are filled with cheap biotin and saw palmetto extract in micro-doses. Amla-1’s standardized emblicanin profile actually inhibits local 5-alpha reductase. After 60 days on the morning water protocol, my barber commented on the hairline density. The companion app makes adherence foolproof.",
    },
    {
      name: "Ananya S.",
      role: "Design Lead & Marathoner",
      rating: 5,
      days: "Day 48 Protocol",
      category: "Skin Glow",
      date: "1 week ago",
      title: "Replaced my ₹4,000 synthetic Vitamin C serum",
      text: "I was skeptical about a 100% single ingredient powder, but the clinical facts convinced me. Drinking 1 scoop in cold water immediately upon waking gives this crisp, astringent tart kick that wakes you up faster than espresso. Within 3 weeks my skin looked luminous, with collagen bounce I haven’t seen in years.",
    },
    {
      name: "Rohan D.",
      role: "Software Founder",
      rating: 5,
      days: "Day 72 Protocol",
      category: "Gut Health & Energy",
      date: "2 weeks ago",
      title: "Clockwork morning motility and steady focus",
      text: "I used to drink green juice blends that cost ₹250 a pop. Amla-1 at ₹500 for a 500g pouch (50 days!) is insane value. 3.8g of natural prebiotic fiber every morning has completely eradicated 3 PM digestive slumps. Clean, single-ingredient power.",
    },
    {
      name: "Pooja K.",
      role: "Holistic Health Coach",
      rating: 5,
      days: "Day 35 Protocol",
      category: "Skin Glow",
      date: "3 weeks ago",
      title: "True reverence for Vedic heritage backed by modern science",
      text: "I love that they honor Amla as Lord Vishnu’s sacred King of Fruits, but refused to use oxidized, sun-dried traditional methods. The cold-vacuum milling preserves the real raw botanical enzymes. You can taste the active bioflavonoids in every sip.",
    },
  ];

  const filteredReviews =
    activeFilter === "All"
      ? reviews
      : reviews.filter((r) => r.category === activeFilter);

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#f8faf8] border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#e2e8e4]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669]">
              Verified Proof
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#041f18] tracking-tight mt-2 font-[family-name:var(--font-display)]">
              4.9 Stars Across 1,800+ Protocols.
            </h2>
            <p className="text-sm text-[#4e5e57] mt-2">
              Real results from verified high-performers, dermatologists, and daily biohackers.
            </p>
          </div>

          {/* Rating Summary Pill */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#e2e8e4] shadow-xs">
            <div className="text-3xl font-extrabold text-[#041f18] font-mono">
              4.9
            </div>
            <div>
              <div className="flex text-[#059669]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#059669] text-[#059669]" />
                ))}
              </div>
              <div className="text-xs text-[#798b83] mt-0.5 font-medium">
                1,842 Verified Pouch Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-mono font-semibold text-[#798b83] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {["All", "Hair Growth", "Skin Glow", "Gut Health & Energy"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#041f18] text-white"
                  : "bg-white text-[#4e5e57] border border-[#e2e8e4] hover:border-[#798b83]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8e4] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#041f18]">
                        {rev.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#059669] font-medium bg-[#e8f5e9] px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Verified Buyer
                      </span>
                    </div>
                    <div className="text-xs text-[#798b83] mt-0.5">{rev.role}</div>
                  </div>
                  <span className="text-[11px] font-mono text-[#10b981] bg-[#041f18] px-2.5 py-1 rounded-md font-bold">
                    {rev.days}
                  </span>
                </div>

                {/* Stars and Date */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex text-[#059669]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#059669] text-[#059669]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#798b83]">{rev.date}</span>
                </div>

                {/* Content */}
                <h4 className="text-sm font-bold text-[#041f18] mt-3">
                  &ldquo;{rev.title}&rdquo;
                </h4>
                <p className="text-xs sm:text-sm text-[#4e5e57] mt-2 leading-relaxed">
                  {rev.text}
                </p>
              </div>

              {/* Tag bottom */}
              <div className="mt-6 pt-4 border-t border-[#f0f4f1] flex items-center justify-between text-xs text-[#798b83]">
                <span className="font-mono text-[11px] text-[#059669] font-semibold">
                  # {rev.category}
                </span>
                <span className="text-[11px] flex items-center gap-1 hover:text-[#041f18] cursor-pointer">
                  <ThumbsUp className="w-3 h-3" /> Helpful (34)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
