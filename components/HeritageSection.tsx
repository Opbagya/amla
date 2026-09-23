import React from "react";
import Image from "next/image";
import { Sparkles, Dna, ShieldCheck, Microscope, Compass } from "lucide-react";

export function HeritageSection() {
  return (
    <section id="heritage" className="py-20 lg:py-28 bg-[#041f18] text-white relative overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0f3e33]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Macro with Clinical Contrast */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-[#0f3e33] shadow-2xl">
              <Image
                src="/images/botanical-science.jpg"
                alt="Emblica Officinalis sliced fruit and clinical extraction beaker"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041f18]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-[#d4e9e2] bg-[#041f18]/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <span className="flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-[#10b981]" />
                  HPLC Active Assay: 98.4% Retention
                </span>
                <span className="text-[#10b981]">Wild Harvested</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#10b981] bg-[#0f3e33] px-3 py-1 rounded-md border border-[#185244]">
                Heritage & Molecular Origin
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-[family-name:var(--font-display)] leading-tight">
              The King of Fruits. <br />
              <span className="text-[#10b981]">Engineered for Modern Biohacking.</span>
            </h2>

            {/* The Ancient Heritage Context */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#d4e9e2] leading-relaxed">
              <p>
                In the classical Vedic texts of the <em>Charaka Samhita</em>, Amla (<em>Emblica officinalis</em>) is revered as the undisputed <strong>&lsquo;King of Fruits&rsquo;</strong> and traditionally celebrated as Lord Vishnu&rsquo;s sacred botanical manifestation—born of celestial <em>Amrit</em> (the elixir of immortality). For three millennia, it stood as the supreme <em>Rasayana</em>—the foundational botanical for vitality, longevity, and deep bodily renewal.
              </p>
              <p className="text-white font-medium pl-4 border-l-2 border-[#10b981]">
                &ldquo;Where traditional Ayurveda observed miraculous clinical outcomes, modern chromatography explains the exact cellular mechanism.&rdquo;
              </p>
              <p>
                We stripped away the mysticism, the archaic sun-drying processes that bake away fragile nutrients, and the rustic sand contaminations. Instead, we applied <strong>cold-vacuum dehydration at sub-40°C</strong> to capture the whole wild fruit at peak botanical potency.
              </p>
            </div>

            {/* Scientific Differentiators */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#0b2921] p-4 rounded-xl border border-[#185244]">
                <div className="text-xs font-mono text-[#10b981] font-bold uppercase">
                  Ancient Myth
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  &lsquo;The Nectar of Immortality&rsquo;
                </div>
                <div className="text-xs text-[#798b83] mt-1">
                  Vedic reverential lore recorded over 3,000 years ago.
                </div>
              </div>

              <div className="bg-[#0b2921] p-4 rounded-xl border border-[#185244]">
                <div className="text-xs font-mono text-[#10b981] font-bold uppercase">
                  Clinical Reality
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  261,500+ ORAC Score
                </div>
                <div className="text-xs text-[#798b83] mt-1">
                  Highest bio-active antioxidant rating of any whole fruit on earth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
