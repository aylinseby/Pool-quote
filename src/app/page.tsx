"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import AnimatedSection from "@/components/AnimatedSection";
import FloorPlan from "@/components/FloorPlan";
import QuoteForm from "@/components/QuoteForm";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs uppercase tracking-[0.25em] text-gold/60 border border-gold/20 px-4 py-1.5 rounded-full mb-6">
      {children}
    </span>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4A574 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-gold/50 border border-gold/20 px-6 py-2 rounded-full mb-8">
              Request for Quotation
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-[0.95]">
              3D Visualization
              <br />
              <span className="text-gold-gradient">Brief</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-display text-xl md:text-2xl text-cream/50 italic mb-8">
              Luxury Pool-Level Office &amp; Reception — Munnar, Kerala
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-cream/40 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              We need photorealistic 3D interior renders for a ground-floor office space located
              directly beneath a figure-8 infinity pool. The space features curved sliding glass
              doors opening to the Munnar valley, dark marble finishes with brushed gold accents,
              and warm ambient LED lighting throughout.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="#quote-form"
                className="px-8 py-4 bg-gold text-stone-950 font-semibold rounded-lg hover:bg-gold-light transition-all text-sm"
              >
                Submit Your Quote
              </a>
              <a
                href="#overview"
                className="px-8 py-4 border border-gold/30 text-gold rounded-lg hover:bg-gold/5 transition-all text-sm"
              >
                View Project Details
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-cream/20">Scroll</span>
          <svg className="w-4 h-4 text-cream/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== PROJECT OVERVIEW ===== */}
      <section id="overview" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Project Overview</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-cream">
                Stayezy Office &amp; Reception
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Project", value: "Stayezy Office & Reception" },
              { label: "Location", value: "Chithirapuram, Near Anachal, Munnar, Kerala" },
              { label: "Space Type", value: "Commercial office under residential infinity pool" },
              { label: "Design Theme", value: "Dark marble + brushed gold + warm LED + wood slat paneling" },
              { label: "Floor Area", value: "~45 sq.m (approx)" },
              { label: "Ceiling Height", value: "3.05 m (10 ft)" },
              { label: "Front Facade", value: "6 curved/straight sliding glass door bays (18.39m total)" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.05}>
                <div className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6 card-hover">
                  <p className="text-xs uppercase tracking-wider text-gold/60 mb-2">{item.label}</p>
                  <p className="text-cream/80 font-medium">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><GoldDivider /></div>

      {/* ===== SPACE LAYOUT ===== */}
      <section id="layout" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Space Layout</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                What&apos;s Inside
              </h2>
              <p className="text-cream/40 max-w-2xl mx-auto">
                A detailed breakdown of the office space, divided into left and right sections from the entrance.
              </p>
            </div>
          </AnimatedSection>

          {/* Floor Plan */}
          <AnimatedSection>
            <div className="bg-cream/[0.03] border border-gold/10 rounded-2xl p-6 md:p-10 mb-16">
              <FloorPlan />
            </div>
          </AnimatedSection>

          {/* Left Side & Right Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimatedSection>
              <div>
                <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/30" />
                  Left Side
                </h3>

                <div className="space-y-8">
                  <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                    <h4 className="font-display text-lg text-cream mb-3">Reception Area</h4>
                    <p className="text-xs text-gold/50 mb-3 uppercase tracking-wider">Central to the space</p>
                    <ul className="space-y-2 text-sm text-cream/50">
                      {[
                        "Dark marble reception counter with brushed gold wave accent on front",
                        "Wood slat paneling on back wall behind Stayezy logo",
                        "LED-backlit logo with gold lettering",
                        "4 decorative pendant lights (matte black + gold)",
                        "Recessed ceiling cove with LED strip",
                        "LED strip under desk (indirect glow)",
                        "iMac / computer setup on counter",
                        "Guest-facing USB-C charging point",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/40 mt-1 text-xs">&#9670;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                    <h4 className="font-display text-lg text-cream mb-3">Lounge / Sofa Area</h4>
                    <p className="text-xs text-gold/50 mb-3 uppercase tracking-wider">Left side near P1 glass bay</p>
                    <ul className="space-y-2 text-sm text-cream/50">
                      {[
                        "Comfortable sofa seating",
                        "Accent downlights",
                        "View through Bay 1 and Bay 2 curved glass to the valley",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/40 mt-1 text-xs">&#9670;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                    <h4 className="font-display text-lg text-cream mb-3">WC Left</h4>
                    <p className="text-xs text-gold/50 mb-3 uppercase tracking-wider">Back wall, left corner &mdash; 2700 x 1200 mm</p>
                    <ul className="space-y-2 text-sm text-cream/50">
                      {[
                        "Full dark marble walls and floor",
                        "LED-backlit mirror",
                        "Floating vanity with brushed gold front panel and LED underside glow",
                        "2 pendant lights (matte black cylindrical)",
                        "Wall-mounted WC",
                        "Wood slat storage cabinet",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/40 mt-1 text-xs">&#9670;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="font-display text-2xl text-gold mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/30" />
                  Right Side
                </h3>

                <div className="space-y-8">
                  <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                    <h4 className="font-display text-lg text-cream mb-3">Manager Cabin</h4>
                    <p className="text-xs text-gold/50 mb-3 uppercase tracking-wider">Right-centre area</p>
                    <ul className="space-y-2 text-sm text-cream/50">
                      {[
                        "Dark marble desk with brushed gold sculptural legs",
                        "Backlit display shelves with LED strips (books, decor)",
                        "3-light linear pendant bar (brushed gold)",
                        "Executive chair + visitor seating area",
                        "View through Bay 5 glass to the valley",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/40 mt-1 text-xs">&#9670;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                    <h4 className="font-display text-lg text-cream mb-3">WC Right</h4>
                    <p className="text-xs text-gold/50 mb-3 uppercase tracking-wider">Back wall, right side &mdash; 2700 x 1200 mm</p>
                    <ul className="space-y-2 text-sm text-cream/50">
                      {[
                        "Same design as WC Left (dark marble, gold vanity, LED mirror)",
                        "Symmetrical to left WC",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/40 mt-1 text-xs">&#9670;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                    <h4 className="font-display text-lg text-cream mb-3">Pump Room</h4>
                    <p className="text-xs text-gold/50 mb-3 uppercase tracking-wider">Back wall, far right corner &mdash; 1450 x 2380 mm</p>
                    <ul className="space-y-2 text-sm text-cream/50">
                      {[
                        "Technical/utility room",
                        "Does not need rendering unless vendor wants to show it closed",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold/40 mt-1 text-xs">&#9670;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><GoldDivider /></div>

      {/* ===== MEASUREMENTS ===== */}
      <section id="measurements" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Structural Dimensions</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                Measurements
              </h2>
              <p className="text-cream/40 max-w-2xl mx-auto">
                All dimensions provided for accurate 3D modeling. Refer to the floor plan above.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-cream/[0.03] border border-gold/10 rounded-2xl p-6 md:p-10 mb-12">
              <FloorPlan />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection>
              <div className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6">
                <h4 className="font-display text-lg text-gold mb-4">Overall Space</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ["Back wall width", "9,490 mm"],
                    ["Left wall height (P1 to back wall)", "3,340 mm"],
                    ["Right wall height (P5 to back wall)", "2,380 mm"],
                    ["Ceiling height", "3,050 mm (10 ft)"],
                  ].map(([label, value], i, arr) => (
                    <div key={label} className={`flex justify-between text-cream/60 ${i < arr.length - 1 ? "border-b border-gold/5 pb-2" : ""}`}>
                      <span>{label}</span><span className="text-cream/80 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6">
                <h4 className="font-display text-lg text-gold mb-4">Columns</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ["C1 (on back wall)", "500 x 200 mm"],
                    ["C2 (1200mm from back wall, aligned with P3)", "300 x 200 mm"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-cream/60 border-b border-gold/5 pb-2">
                      <span>{label}</span><span className="text-cream/80 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <h4 className="font-display text-lg text-gold mb-4 mt-6">Depth</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ["Back wall to C2", "1,200 mm"],
                    ["C2 to P3 (front)", "3,520 mm"],
                    ["Total depth (back wall to P3)", "4,720 mm"],
                  ].map(([label, value], i, arr) => (
                    <div key={label} className={`flex justify-between text-cream/60 ${i < arr.length - 1 ? "border-b border-gold/5 pb-2" : ""}`}>
                      <span>{label}</span><span className="text-cream/80 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Front Pillars Table */}
          <AnimatedSection>
            <div className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6 mb-8">
              <h4 className="font-display text-lg text-gold mb-6">Front Pillars (P1 to P5) — Glass Between Each</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gold/20">
                      <th className="text-left text-cream/50 font-medium pb-3 pr-4">Bay</th>
                      <th className="text-left text-cream/50 font-medium pb-3 pr-4">Position</th>
                      <th className="text-left text-cream/50 font-medium pb-3 pr-4">Shape</th>
                      <th className="text-right text-cream/50 font-medium pb-3">Glass Width</th>
                    </tr>
                  </thead>
                  <tbody className="text-cream/60">
                    {[
                      { bay: "Bay 1", pos: "Left Wall \u2192 P1", shape: "Straight", width: "3,340 mm" },
                      { bay: "Bay 2", pos: "P1 \u2192 P2", shape: "Curved", width: "4,160 mm" },
                      { bay: "Bay 3", pos: "P2 \u2192 P3", shape: "Curved", width: "2,730 mm" },
                      { bay: "Bay 4", pos: "P3 \u2192 P4", shape: "Curved", width: "2,330 mm" },
                      { bay: "Bay 5", pos: "P4 \u2192 P5", shape: "Curved", width: "3,450 mm" },
                      { bay: "Bay 6", pos: "P5 \u2192 Right Wall", shape: "Straight", width: "2,380 mm" },
                    ].map((row) => (
                      <tr key={row.bay} className="border-b border-gold/5">
                        <td className="py-3 pr-4 text-gold/70 font-medium">{row.bay}</td>
                        <td className="py-3 pr-4">{row.pos}</td>
                        <td className="py-3 pr-4">
                          <span className={`inline-block px-2 py-0.5 rounded text-xs ${
                            row.shape === "Curved"
                              ? "bg-blue-900/20 text-blue-300/70"
                              : "bg-gold/10 text-gold/70"
                          }`}>
                            {row.shape}
                          </span>
                        </td>
                        <td className="py-3 text-right text-cream/80 font-medium">{row.width}</td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-gold/20">
                      <td className="py-3 pr-4 text-gold font-semibold" colSpan={3}>Total</td>
                      <td className="py-3 text-right text-gold font-semibold">18,390 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6">
                <h4 className="font-display text-lg text-gold mb-4">Internal Rooms (on back wall)</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ["WC Left", "2,700 x 1,200 mm"],
                    ["WC Right", "2,700 x 1,200 mm"],
                    ["Pump Room", "1,450 x 2,380 mm"],
                  ].map(([label, value], i, arr) => (
                    <div key={label} className={`flex justify-between text-cream/60 ${i < arr.length - 1 ? "border-b border-gold/5 pb-2" : ""}`}>
                      <span>{label}</span><span className="text-cream/80 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6">
                <h4 className="font-display text-lg text-gold mb-4">Horizontal Centre Distances</h4>
                <div className="space-y-3 text-sm">
                  {[
                    ["P1 to C2/P3 line", "6,200 mm"],
                    ["C2/P3 line to P5", "5,200 mm"],
                  ].map(([label, value], i, arr) => (
                    <div key={label} className={`flex justify-between text-cream/60 ${i < arr.length - 1 ? "border-b border-gold/5 pb-2" : ""}`}>
                      <span>{label}</span><span className="text-cream/80 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><GoldDivider /></div>

      {/* ===== REFERENCE IMAGES ===== */}
      <section id="references" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Visual References</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                Reference Images
              </h2>
              <p className="text-cream/40 max-w-2xl mx-auto">
                Mood board and reference visuals to guide the 3D visualization style and atmosphere.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Reception Area Render", desc: "Dark marble counter, Stayezy logo, gold wave accent, pendant lights, wood slat wall", img: "/3d_002.jpeg" },
              { title: "Manager Cabin Render", desc: "Dark marble desk, gold legs, backlit shelves, pendant bar, executive chair", img: "/3d_005.jpeg" },
              { title: "WC Render", desc: "Full dark marble, LED mirror, gold vanity, wood slat cabinet, pendant lights", img: "/3d_003.jpeg" },
              { title: "Floor Plan", desc: "The SVG structural plan with all measurements", img: "/3d_001.jpeg" },
              { title: "Pool Exterior", desc: "Figure-8 pool from above (to show context)", img: "/3d_004.jpeg" },
              { title: "Front Elevation", desc: "Curved glass between pillars with pool above", img: "/3d_006.jpeg" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="bg-cream/[0.03] border border-gold/10 rounded-xl overflow-hidden card-hover group">
                  <div className="aspect-[4/3] bg-cream/[0.02] relative overflow-hidden">
                    {item.img ? (
                      <>
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center p-6">
                            <svg className="w-12 h-12 text-gold/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-cream/20 text-xs">Coming soon</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-base text-cream mb-2">{item.title}</h4>
                    <p className="text-cream/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><GoldDivider /></div>

      {/* ===== DELIVERABLES ===== */}
      <section id="deliverables" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Deliverables</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                What We Need
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div>
                <h3 className="font-display text-2xl text-gold mb-6">Required Renders</h3>
                <div className="space-y-4">
                  {[
                    "Reception area — front view (showing counter, logo wall, pendant lights)",
                    "Reception area — wide angle from glass door side (showing full space depth)",
                    "Manager cabin — front view (desk, shelves, pendant bar)",
                    "Manager cabin — side angle (showing glass bay view)",
                    "WC — one full interior render (mirror, vanity, WC)",
                    "Full space — panoramic/wide angle showing entire ground floor",
                    "Exterior view — looking in through curved glass doors (showing interior visible through glass)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 bg-cream/[0.02] border border-gold/10 rounded-lg p-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm font-semibold">
                        {i + 1}
                      </span>
                      <p className="text-cream/60 text-sm pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="font-display text-2xl text-gold mb-6">Optional Add-ons</h3>
                <p className="text-cream/40 text-sm mb-4">Quote these separately if available</p>
                <div className="space-y-3 mb-10">
                  {[
                    "360\u00B0 virtual tour",
                    "Walkthrough video animation (30-60 seconds)",
                    "Additional camera angles",
                    "Night/evening lighting version",
                    "Furniture variations",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-cream/50 text-sm">
                      <span className="text-gold/40">+</span>
                      {item}
                    </div>
                  ))}
                </div>

                <h3 className="font-display text-2xl text-gold mb-6">File Format</h3>
                <div className="bg-cream/[0.02] border border-gold/10 rounded-xl p-6">
                  <p className="text-cream/60 text-sm leading-relaxed">
                    High resolution PNG/JPEG (min 4000px wide) + source files (3ds Max / SketchUp / Blender)
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><GoldDivider /></div>

      {/* ===== QUOTE FORM ===== */}
      <section id="quote-form" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <SectionLabel>Submit Quote</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
                Send Us Your Quote
              </h2>
              <p className="text-cream/40 max-w-xl mx-auto">
                Fill in the details below. We&apos;ll review all submissions and respond within 48 hours.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-cream/[0.03] border border-gold/10 rounded-2xl p-8 md:p-12">
              <QuoteForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><GoldDivider /></div>

      {/* ===== TERMS ===== */}
      <section id="terms" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <SectionLabel>Terms &amp; Conditions</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl text-cream">
                Important Notes
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "This is a Request for Quotation only, not a confirmed order",
                "Reference images and AutoCAD plans available on request",
                "Site visit can be arranged for shortlisted vendors",
                "All renders must be original work, not AI-generated",
                "Source files to be provided along with final renders",
                "Payment: 50% advance, 50% on final delivery (negotiable)",
              ].map((term, i) => (
                <div key={i} className="flex items-start gap-3 bg-cream/[0.02] border border-gold/10 rounded-lg p-4">
                  <span className="flex-shrink-0 text-gold/40 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="text-cream/50 text-sm">{term}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-gold/10 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-display text-2xl text-gold mb-2">Stayezy</h3>
          <p className="text-cream/30 text-sm mb-6">Munnar, Kerala</p>
          <GoldDivider />
          <div className="mt-6">
            <p className="text-cream/40 text-sm">Contact: <span className="text-cream/60">Seby Babu</span></p>
          </div>
          <p className="text-cream/20 text-xs mt-8">&copy; 2024 Stayezy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
