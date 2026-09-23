"use client";

import React, { useState } from "react";
import { ShoppingBag, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollToHero: () => void;
}

export function Navbar({ cartCount, onOpenCart, onScrollToHero }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Clinical Announcement Bar */}
      <div className="bg-[#041f18] text-[#d4e9e2] text-xs font-medium py-2.5 px-4 tracking-wide text-center border-b border-[#0f3e33]/50 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 bg-[#0f3e33] px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#10b981] uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-[#10b981]" /> Welcome Offer
        </span>
        <span className="hidden sm:inline">Free Frosted Shaker + Stainless Micro-Scoop + Lifetime App Access with First Subscription.</span>
        <span className="sm:hidden">Free Shaker + Scoop with Subscription.</span>
        <button
          onClick={onScrollToHero}
          className="underline decoration-[#10b981] underline-offset-4 hover:text-white transition-colors font-semibold ml-1 cursor-pointer"
        >
          Claim Now
        </button>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8e4] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo and Clinical Stamp */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-2xl font-extrabold tracking-tight font-[family-name:var(--font-display)] text-[#041f18] group-hover:text-[#0f3e33] transition-colors">
                AMLA<span className="text-[#059669]">-1</span>
              </span>
              <span className="hidden md:inline-block text-[10px] tracking-widest uppercase font-mono bg-[#f0f4f1] text-[#4e5e57] px-2 py-0.5 rounded border border-[#e2e8e4]">
                Cellular Daily
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4e5e57]">
            <a href="#science" className="hover:text-[#041f18] transition-colors">
              The Science
            </a>
            <a href="#ritual" className="hover:text-[#041f18] transition-colors">
              The Ritual
            </a>
            <a href="#heritage" className="hover:text-[#041f18] transition-colors">
              The Heritage
            </a>
            <a href="#nutrition" className="hover:text-[#041f18] transition-colors">
              Supplement Facts
            </a>
            <a href="#app" className="hover:text-[#041f18] transition-colors">
              Companion App
            </a>
            <a href="#reviews" className="hover:text-[#041f18] transition-colors">
              Reviews
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onScrollToHero}
              className="hidden lg:flex items-center gap-2 bg-[#041f18] hover:bg-[#0f3e33] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Get Amla-1</span>
              <span className="text-[#10b981] font-mono">₹500</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#10b981]" />
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Open shopping cart"
              className="relative p-2.5 text-[#041f18] hover:bg-[#f0f4f1] rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-[#059669] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in-50 duration-200">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#041f18] hover:bg-[#f0f4f1] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#e2e8e4] bg-white px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 font-medium text-base text-[#111817]">
              <a
                href="#science"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4e5e57] hover:text-[#041f18]"
              >
                The Science & Benefits
              </a>
              <a
                href="#ritual"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4e5e57] hover:text-[#041f18]"
              >
                The 3-Step Morning Ritual
              </a>
              <a
                href="#heritage"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4e5e57] hover:text-[#041f18]"
              >
                The King of Fruits Heritage
              </a>
              <a
                href="#nutrition"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4e5e57] hover:text-[#041f18]"
              >
                100% Single Ingredient Facts
              </a>
              <a
                href="#app"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4e5e57] hover:text-[#041f18]"
              >
                Companion App
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#4e5e57] hover:text-[#041f18]"
              >
                Customer Reviews
              </a>
            </div>
            <div className="pt-4 border-t border-[#e2e8e4]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToHero();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#041f18] text-white font-semibold py-3.5 rounded-xl shadow-md cursor-pointer"
              >
                <span>Order Amla-1 (500g Pouch)</span>
                <span className="text-[#10b981]">₹500</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
