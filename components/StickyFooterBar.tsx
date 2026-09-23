"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

interface StickyFooterBarProps {
  onAddToCart: () => void;
}

export function StickyFooterBar({ onAddToCart }: StickyFooterBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Add to Cart sticky bar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e2e8e4] py-3 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Product Info Thumbnail */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#e2e8e4] bg-[#f4f7f5] shrink-0">
            <Image
              src="/images/pouch-hero.jpg"
              alt="Amla-1 Pouch thumbnail"
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-[#041f18]">
                Amla-1™ Daily Detox
              </h4>
              <span className="text-[10px] font-mono bg-[#e8f5e9] text-[#059669] px-2 py-0.2 rounded font-semibold">
                500g • 50 Servings
              </span>
            </div>
            <div className="text-xs text-[#798b83]">
              100% Pure Dried Emblica Officinalis
            </div>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-[#798b83] font-medium hidden xs:block">
              Starting from
            </div>
            <div className="text-lg font-black text-[#041f18] font-mono leading-none">
              ₹500{" "}
              <span className="text-xs font-normal text-[#059669]">
                (₹450 on Sub)
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onAddToCart}
            className="flex items-center gap-2 bg-[#041f18] hover:bg-[#0f3e33] text-white font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#10b981]" />
            <span>Add to Cart</span>
            <ArrowRight className="w-4 h-4 text-[#10b981] hidden sm:inline" />
          </button>
        </div>
      </div>
    </aside>
  );
}
