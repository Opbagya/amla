import React from "react";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#041f18] text-[#d4e9e2] pt-16 pb-28 sm:pb-20 border-t border-[#0f3e33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#0f3e33]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-extrabold tracking-tight font-[family-name:var(--font-display)] text-white">
              AMLA<span className="text-[#10b981]">-1</span>
            </span>
            <p className="text-xs text-[#a3b8b0] leading-relaxed max-w-sm">
              Engineered for high-performance cellular health, collagen synthesis, hair growth, and morning gut detox. 100% pure cold-dehydrated wild Indian gooseberry. Complete with the Amla-1 Companion App.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#10b981]">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Single-Ingredient Matrix • 500g</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              The Science
            </div>
            <ul className="space-y-2 text-xs text-[#a3b8b0]">
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  Hair & DHT Inhibition
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  Dermal Collagen
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-white transition-colors">
                  Gut Motility & Flush
                </a>
              </li>
              <li>
                <a href="#nutrition" className="hover:text-white transition-colors">
                  500g Supplement Facts
                </a>
              </li>
            </ul>
          </div>

          {/* Protocol Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Protocol
            </div>
            <ul className="space-y-2 text-xs text-[#a3b8b0]">
              <li>
                <a href="#ritual" className="hover:text-white transition-colors">
                  The 3-Step Morning Ritual
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-white transition-colors">
                  King of Fruits Heritage
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-white transition-colors">
                  Amla-1 Companion App
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Verified Biohacker Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Assurance Newsletter */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Cellular Dispatch
            </div>
            <p className="text-xs text-[#a3b8b0]">
              Weekly peer-reviewed longevity protocols, fasting timings, and micronutrient research.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#0b2921] border border-[#185244] text-xs text-white px-3 py-2 rounded-lg focus:outline-none focus:border-[#10b981] flex-1"
              />
              <button
                type="button"
                className="bg-[#10b981] hover:bg-[#059669] text-[#041f18] text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer */}
        <div className="pt-8 text-[11px] text-[#798b83] space-y-4 leading-relaxed">
          <p>
            * These statements have not been evaluated by the Food and Drug Administration or FSSAI. This product is not intended to diagnose, treat, cure, or prevent any disease. As with any dietary supplement, consult your healthcare practitioner before use, especially if you are pregnant, nursing, anticipating surgery, or under medical supervision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#0f3e33]/50 text-xs">
            <span>© 2026 Amla-1 Cellular Labs Inc. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span className="hover:text-white cursor-pointer">Lab Certificates (COA)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
