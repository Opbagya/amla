"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Zap,
  ArrowRight,
  Flame,
  Award,
  Layers,
  HeartPulse,
} from "lucide-react";

interface ProductHeroProps {
  onAddToCart: (item: {
    plan: "subscription" | "onetime";
    price: number;
    quantity: number;
  }) => void;
}

export function ProductHero({ onAddToCart }: ProductHeroProps) {
  const [selectedPlan, setSelectedPlan] = useState<"subscription" | "onetime">("subscription");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const images = [
    {
      src: "/images/pouch-hero.jpg",
      alt: "Amla-1 500g Matte Forest Green Stand-Up Supplement Pouch",
      caption: "Studio Front View",
      badge: "500g Net Wt • 50 Servings",
    },
    {
      src: "/images/pouch-angle.jpg",
      alt: "Amla-1 Angled Perspective on Travertine Pedestal",
      caption: "Packaging Detail",
      badge: "Clinical Matte Finish",
    },
    {
      src: "/images/ritual-prep.jpg",
      alt: "Amla-1 Morning Ritual Prep with Shaker Glass and Stainless Scoop",
      caption: "The Morning Protocol",
      badge: "Water Soluble • 1 Scoop",
    },
    {
      src: "/images/botanical-science.jpg",
      alt: "Botanical Emblica Officinalis Fruit Macro with Pure Extract",
      caption: "Cellular Purity",
      badge: "100% Single Ingredient",
    },
    {
      src: "/images/app-mockup.jpg",
      alt: "Amla-1 Companion App Habit Tracker on Smartphone",
      caption: "Companion App",
      badge: "App Integration Included",
    },
  ];

  const subPrice = 450;
  const oneTimePrice = 500;
  const activePrice = selectedPlan === "subscription" ? subPrice : oneTimePrice;

  const handleAddToCart = () => {
    onAddToCart({
      plan: selectedPlan,
      price: activePrice,
      quantity,
    });
  };

  return (
    <section className="bg-white pt-6 pb-16 lg:pt-10 lg:pb-24 border-b border-[#e2e8e4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Efficacy Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs font-medium text-[#4e5e57]">
            <span className="hover:text-[#041f18] transition-colors cursor-pointer">Store</span>
            <span>/</span>
            <span className="hover:text-[#041f18] transition-colors cursor-pointer">Cellular Health</span>
            <span>/</span>
            <span className="text-[#041f18] font-semibold">Amla-1 Daily Detox</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f0f4f1] text-[#0f3e33] border border-[#d4e9e2] px-3 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>Batch #AML-2026 Lab Certified Clean</span>
          </div>
        </div>

        {/* 2-Column Split Layout Mirroring DrinkAG1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Product Showcase Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Main Stage Display */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f4f7f5] border border-[#e2e8e4] group shadow-sm">
              <Image
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-[1.02]"
              />

              {/* Floating Clinical Badge */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#041f18]/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-white/10 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                  {images[activeImageIndex].badge}
                </span>
                {selectedPlan === "subscription" && (
                  <span className="inline-flex items-center gap-1.5 bg-[#059669] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Free Shaker + Scoop Kit Included
                  </span>
                )}
              </div>

              {/* Bottom Quick-Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <span className="bg-white/90 backdrop-blur-md text-[#041f18] text-xs font-mono font-medium px-3 py-1.5 rounded-lg border border-[#e2e8e4] shadow-sm">
                  {images[activeImageIndex].caption}
                </span>
                <span className="bg-[#041f18]/80 text-[#d4e9e2] text-xs font-mono px-2.5 py-1 rounded-md">
                  {activeImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-5 gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-[#041f18] ring-2 ring-[#059669]/20 shadow-sm scale-[0.98]"
                      : "border-[#e2e8e4] hover:border-[#798b83] opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`View ${img.caption}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="120px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>

            {/* Gallery Trust Footnote */}
            <div className="flex items-center justify-center gap-6 py-2 text-xs text-[#4e5e57] font-medium border-t border-[#f0f4f1] mt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                100% Pure Dried Emblica Officinalis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                Sub-40°C Cold Dehydrated
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                Zero Fillers or Additives
              </span>
            </div>
          </div>

          {/* Right Column: E-commerce Product Details & Purchase Form */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Header Badge */}
            <div className="mb-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-[#059669] bg-[#e8f5e9] px-2.5 py-1 rounded-md border border-[#c8e6c9]">
                Foundational Morning Nutrition
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#041f18] font-[family-name:var(--font-display)] mt-2">
              Amla-1™ Daily Detox
            </h1>
            <p className="text-sm font-medium text-[#4e5e57] mt-1">
              500g Pure Freeze-Dried Wild Indian Gooseberry Powder • 50 Daily Servings
            </p>

            {/* Star Rating Strip */}
            <div className="flex items-center gap-3 mt-3.5 pb-4 border-b border-[#e2e8e4]">
              <div className="flex items-center text-[#059669]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#059669] text-[#059669]" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#041f18]">4.9</span>
              <span className="text-xs text-[#798b83]">
                (1,842 verified biohackers & customers)
              </span>
            </div>

            {/* Clinical Benefit Bullets */}
            <div className="my-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e8f5e9] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#0d1714]">
                  <strong className="font-semibold text-[#041f18]">Follicular Density & Hair Growth:</strong>{" "}
                  <span className="text-[#4e5e57]">
                    Clinically concentrated tannoids inhibit 5-alpha reductase to nourish hair root microcirculation.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e8f5e9] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#0d1714]">
                  <strong className="font-semibold text-[#041f18]">Endogenous Collagen Synthesis:</strong>{" "}
                  <span className="text-[#4e5e57]">
                    280mg natural Vitamin C complex activates pro-collagen hydroxylase for radiant skin elasticity.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e8f5e9] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#0d1714]">
                  <strong className="font-semibold text-[#041f18]">Morning Gut Flush & Motility:</strong>{" "}
                  <span className="text-[#4e5e57]">
                    Soluble prebiotic pectin and polyphenols prime digestive flora immediately upon waking.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#e8f5e9] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#0d1714]">
                  <strong className="font-semibold text-[#041f18]">Single Ingredient Purity:</strong>{" "}
                  <span className="text-[#4e5e57]">
                    100% dried wild amla. 0g added sugar, 0g artificial flavors, zero binders.
                  </span>
                </div>
              </div>
            </div>

            {/* Purchase Selector: Subscription vs One-Time Purchase */}
            <div className="mt-2 space-y-3">
              {/* Option 1: Monthly Subscription */}
              <div
                onClick={() => setSelectedPlan("subscription")}
                className={`relative rounded-xl p-4 border-2 transition-all cursor-pointer ${
                  selectedPlan === "subscription"
                    ? "border-[#059669] bg-[#f8faf8] shadow-sm"
                    : "border-[#e2e8e4] hover:border-[#798b83] bg-white"
                }`}
              >
                <div className="absolute -top-3 right-4 bg-[#041f18] text-[#10b981] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#0f3e33]">
                  Most Popular • Save 10%
                </div>

                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="purchase_plan"
                      checked={selectedPlan === "subscription"}
                      onChange={() => setSelectedPlan("subscription")}
                      className="mt-1 w-4 h-4 text-[#059669] focus:ring-[#059669] border-[#e2e8e4] cursor-pointer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-[#041f18]">
                          Subscribe & Save
                        </span>
                        <span className="text-xs bg-[#e8f5e9] text-[#059669] font-semibold px-2 py-0.5 rounded">
                          ₹450 / 500g
                        </span>
                      </div>
                      <p className="text-xs text-[#4e5e57] mt-1">
                        Delivered automatically every 50 days (₹9/day). Pause or cancel anytime in 1 click.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-extrabold text-[#041f18]">₹450</span>
                    <span className="block text-xs line-through text-[#798b83]">₹500</span>
                  </div>
                </div>

                {/* Subscription Perks Box */}
                {selectedPlan === "subscription" && (
                  <div className="mt-3.5 pt-3 border-t border-[#e2e8e4] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#0f3e33] animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                      <span>Free Frosted Shaker Bottle</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                      <span>Free Stainless Micro-Scoop</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                      <span>Amla-1 App Pro (Lifetime Free)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
                      <span>Free Express Shipping Forever</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Option 2: One-Time Purchase */}
              <div
                onClick={() => setSelectedPlan("onetime")}
                className={`rounded-xl p-4 border-2 transition-all cursor-pointer ${
                  selectedPlan === "onetime"
                    ? "border-[#059669] bg-[#f8faf8] shadow-sm"
                    : "border-[#e2e8e4] hover:border-[#798b83] bg-white"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="purchase_plan"
                      checked={selectedPlan === "onetime"}
                      onChange={() => setSelectedPlan("onetime")}
                      className="mt-1 w-4 h-4 text-[#059669] focus:ring-[#059669] border-[#e2e8e4] cursor-pointer"
                    />
                    <div>
                      <span className="font-bold text-base text-[#041f18]">
                        One-Time Purchase
                      </span>
                      <p className="text-xs text-[#4e5e57] mt-1">
                        1x 500g pouch (50 morning servings). Includes precision measuring scoop.
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-extrabold text-[#041f18]">₹500</span>
                    <span className="block text-[11px] text-[#798b83]">₹10 / serving</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Action */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center justify-between border-2 border-[#e2e8e4] rounded-xl px-4 py-3 sm:py-2.5 bg-white sm:w-32 shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-lg font-bold text-[#4e5e57] hover:text-[#041f18] transition-colors w-6 text-center cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="font-mono font-bold text-sm text-[#041f18]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-lg font-bold text-[#4e5e57] hover:text-[#041f18] transition-colors w-6 text-center cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Massive Add to Cart CTA */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-3 bg-[#041f18] hover:bg-[#0f3e33] text-white font-bold text-base py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer group"
              >
                <span>
                  {selectedPlan === "subscription" ? "Start Subscription" : "Add to Cart"}
                </span>
                <span className="text-[#10b981] font-mono">
                  • ₹{activePrice * quantity}
                </span>
                <ArrowRight className="w-5 h-5 text-[#10b981] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Reassurance Pillars */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center border-t border-[#e2e8e4] pt-5">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#059669]" />
                <span className="text-[11px] font-semibold text-[#041f18]">Free Shipping</span>
                <span className="text-[10px] text-[#798b83]">Delivered in 2-4 Days</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-[#059669]" />
                <span className="text-[11px] font-semibold text-[#041f18]">30-Day Guarantee</span>
                <span className="text-[10px] text-[#798b83]">100% Cellular Refund</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span className="text-[11px] font-semibold text-[#041f18]">Lab Tested</span>
                <span className="text-[10px] text-[#798b83]">Heavy Metal Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
