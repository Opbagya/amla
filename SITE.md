# Amla-1™ Daily Morning Detox

> Foundational cellular nutrition powder engineered from 100% pure cold-dehydrated wild Indian gooseberry (Emblica officinalis).

## Brand Identity
- **Personality:** Clinical-yet-premium, high-performance biohacking, minimalist scientific elegance, uncompromising transparency. Direct visual homage to the DrinkAG1 aesthetic.
- **Palette:**
  - Backgrounds: Crisp clean whites (`#FFFFFF`), light subtle off-whites (`#F8FAF8`, `#F4F7F5`)
  - Deep Rich Greens: `#041F18` (Primary Dark), `#0F3E33` (Brand Forest Green), `#185244` (Deep Pine)
  - Clinical Green Accents: `#059669` (Active Emerald), `#10B981` (Bright Bio-Green), `#D4E9E2` (Soft Mint)
  - Typography Neutrals: `#0D1714` (Stark Black/Dark Charcoal), `#4E5E57` (Clinical Muted Text)
- **Typography:** Space Grotesk (Display / Headlines) + DM Sans (Body / Clinical Technical Copy) + Monospace (Assay Numbers & Supplement Facts).

## Core Product Details
- **Product:** Amla-1™ Daily Morning Detox
- **Net Weight:** 500g (50 Daily Servings @ 10g/scoop)
- **Price:**
  - One-Time Purchase: ₹500 (₹10 / serving)
  - Monthly Subscription: ₹450 (Save 10% — ₹9 / serving), includes Free Frosted Shaker Bottle, Precision Stainless Micro-Scoop, and Lifetime Amla-1 Companion App Pro Access.
- **Single Ingredient:** 100% Pure Organic Freeze-Dried Indian Gooseberry (*Emblica officinalis*) Fruit Powder. Zero fillers, 0g added sugar, zero preservatives.
- **Nutritional Profile (per 10g serving / per 500g pouch):**
  - Energy: 27 kcal / 1,350 kcal
  - Natural Vitamin C: 280 mg (311% DV) / 14,000 mg
  - Prebiotic Soluble Fiber: 3.8 g / 190 g
  - Total Sugars: 0.4 g (natural fruit fructose only, 0g added sugar) / 20 g
  - Protein: 0.25 g / 12.5 g
  - Total Fat: 0 g / 2.5 g
  - Active Tannoids (Emblicanin A & B): 1,200 mg / 60,000 mg

## Pages & Structure
- **Homepage** (`/`):
  1. **Top Clinical Banner & Navigation** (`components/Navbar.tsx`): Welcome promotion with shaker kit perk, brand mark, navigation anchors, live cart drawer trigger.
  2. **E-commerce Hero Section (Split Layout)** (`components/ProductHero.tsx`):
     - Interactive multi-angle photorealistic product gallery with thumbnail switcher (Hero Pouch, Packaging Angle, Morning Ritual in kitchen, Macro Gooseberry Botanical Extract, Companion App).
     - Clinical copy, star rating (4.9/5 from 1,842 biohackers), benefit bullets, interactive subscription toggle (₹450 vs ₹500), quantity counter, and massive Add to Cart CTA.
  3. **Trust & Clinical Efficacy Banner** (`components/TrustBanner.tsx`): 5 clinical validation pillars (100% Single Ingredient, 30x Vitamin C vs Citrus, Sub-40°C Cold Milling, Zero Sugar/Fillers, 3rd-Party Lab Verified).
  4. **The 3-Step Morning Ritual** (`components/TheRitual.tsx`): Step 1 Wake & Hydrate (07:00 AM), Step 2 Measure & Whisk (10g scoop), Step 3 Track & Habituate (Amla-1 App), paired with high-res lifestyle photography.
  5. **Deep-Dive Molecular Benefits** (`components/BenefitsGrid.tsx`): Interactive tabbed interface covering Trichological Hair Density (DHT inhibition), Dermal Collagen Synthesis, Gut Microbiome Motility, and Mitochondrial Longevity (261,500+ ORAC score).
  6. **The King of Fruits Heritage Section** (`components/HeritageSection.tsx`): Editorial dark forest green section linking ancient Vedic reverence (Lord Vishnu's Amrit Phala) with modern cold-vacuum dehydration chromatography.
  7. **Complete 500g Supplement Facts** (`components/SupplementFacts.tsx`): Clinical supplement facts panel with toggle for "Per 10g Scoop" vs "Per 500g Pouch" and zero-tolerance blacklist.
  8. **The Digital Ecosystem** (`components/AppEcosystem.tsx`): Amla-1 Companion App showcase with circadian streak tracker, bioavailability timer, and biomarker logs.
  9. **Scientific Comparison Matrix** (`components/ComparisonTable.tsx`): Side-by-side comparison of Amla-1 vs synthetic vitamin C tablets, generic dusty ayurvedic churna, and imported multi-greens powders.
  10. **Verified Biohacker Reviews** (`components/ReviewsSection.tsx`): Filterable customer proof across hair growth, skin radiance, and gut health.
  11. **Clinical FAQ Section** (`components/FaqSection.tsx`): Accordions addressing taste, dosage, single-ingredient advantages, and app access.
  12. **Sticky Add-to-Cart Bottom Bar** (`components/StickyFooterBar.tsx`): Fixed bottom bar appearing on scroll past the hero with thumbnail, title, price, and instant checkout trigger.
  13. **Interactive Slide-Over Cart Drawer** (`components/CartDrawer.tsx`): Real-time cart state with free shipping progress, gift unlocks, quantity controls, and order confirmation simulation.
  14. **Clinical Footer** (`components/Footer.tsx`): Medical disclaimers, laboratory batch assurance, sitemap, and newsletter.

## Assets
- Generated Photorealistic Images (`public/images/`):
  - `pouch-hero.jpg`: Minimalist matte dark forest green Amla-1 pouch on architectural stone pedestal.
  - `pouch-angle.jpg`: 3/4 angle clinical detail shot on travertine stone.
  - `ritual-prep.jpg`: Ribbed glass tumbler with dissolved amla drink, stainless scoop, and morning kitchen sunlight.
  - `app-mockup.jpg`: Smartphone displaying the Amla-1 Companion App UI with 42-day morning streak.
  - `botanical-science.jpg`: Macro sliced Indian gooseberry with crystalline cellular structure and laboratory extraction beaker.
