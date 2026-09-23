"use client";

import React, { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductHero } from "@/components/ProductHero";
import { TrustBanner } from "@/components/TrustBanner";
import { TheRitual } from "@/components/TheRitual";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { HeritageSection } from "@/components/HeritageSection";
import { SupplementFacts } from "@/components/SupplementFacts";
import { AppEcosystem } from "@/components/AppEcosystem";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqSection } from "@/components/FaqSection";
import { StickyFooterBar } from "@/components/StickyFooterBar";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState<{
    plan: "subscription" | "onetime";
    price: number;
    quantity: number;
  }>({
    plan: "subscription",
    price: 450,
    quantity: 1,
  });

  const heroRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (newItem?: {
    plan: "subscription" | "onetime";
    price: number;
    quantity: number;
  }) => {
    if (newItem) {
      setCartItem(newItem);
    }
    setIsCartOpen(true);
  };

  const handleScrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#0d1714] selection:bg-[#d4e9e2] selection:text-[#041f18]">
      {/* Top Navbar */}
      <Navbar
        cartCount={cartItem.quantity}
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToHero={handleScrollToHero}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Product Section */}
        <div ref={heroRef}>
          <ProductHero onAddToCart={handleAddToCart} />
        </div>

        {/* 2. Clinical Trust & Efficacy Banner */}
        <TrustBanner />

        {/* 3. The 3-Step Morning Ritual */}
        <TheRitual />

        {/* 4. Deep-Dive Benefits & Molecular Science */}
        <BenefitsGrid />

        {/* 5. The King of Fruits (Heritage & Cold-Extraction Science) */}
        <HeritageSection />

        {/* 6. Supplement Facts & 100% Single Ingredient Integrity (500g) */}
        <SupplementFacts />

        {/* 7. The Digital Ecosystem: Amla-1 Companion App */}
        <AppEcosystem />

        {/* 8. Comparison Matrix */}
        <ComparisonTable />

        {/* 9. Verified Biohacker Reviews */}
        <ReviewsSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Global Sticky Footer Bar appearing on scroll */}
      <StickyFooterBar onAddToCart={() => handleAddToCart()} />

      {/* Interactive Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItem={cartItem}
        onUpdateQuantity={(qty) => setCartItem((prev) => ({ ...prev, quantity: qty }))}
        onClearCart={() => setCartItem((prev) => ({ ...prev, quantity: 0 }))}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
