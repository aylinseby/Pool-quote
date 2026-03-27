"use client";

import { useState } from "react";
import { supabase, QuoteSubmission } from "@/lib/supabase";

const SOFTWARE_OPTIONS = [
  "3ds Max",
  "SketchUp",
  "Blender",
  "Lumion",
  "Enscape",
  "V-Ray",
  "Corona",
  "Other",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    whatsapp: "",
    portfolio_link: "",
    city: "",
    software_used: [] as string[],
    experience: "",
    quote_renders: "",
    quote_virtual_tour: "",
    quote_walkthrough: "",
    timeline_days: "",
    revision_rounds: "",
    payment_terms: "",
    remarks: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSoftwareToggle = (sw: string) => {
    setFormData((prev) => ({
      ...prev,
      software_used: prev.software_used.includes(sw)
        ? prev.software_used.filter((s) => s !== sw)
        : [...prev.software_used, sw],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const submission: QuoteSubmission = {
      company_name: formData.company_name,
      contact_person: formData.contact_person,
      phone: formData.phone,
      email: formData.email,
      whatsapp: formData.whatsapp || undefined,
      portfolio_link: formData.portfolio_link,
      city: formData.city || undefined,
      software_used: formData.software_used,
      experience: formData.experience,
      quote_renders: Number(formData.quote_renders),
      quote_virtual_tour: formData.quote_virtual_tour
        ? Number(formData.quote_virtual_tour)
        : null,
      quote_walkthrough: formData.quote_walkthrough
        ? Number(formData.quote_walkthrough)
        : null,
      timeline_days: Number(formData.timeline_days),
      revision_rounds: Number(formData.revision_rounds),
      payment_terms: formData.payment_terms || undefined,
      remarks: formData.remarks || undefined,
    };

    try {
      const { error: supabaseError } = await supabase
        .from("3d_quotes")
        .insert([submission]);

      if (supabaseError) throw supabaseError;
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed. Please try again or contact us directly.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-3xl text-cream mb-4">Quote Received</h3>
        <p className="text-cream/60 max-w-md mx-auto">
          Thank you for your submission. We&apos;ll review your quote and get back to you within 48 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-stone-950/50 border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all";
  const labelClass = "block text-sm font-medium text-cream/70 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Info */}
      <div>
        <h4 className="font-display text-xl text-gold mb-6">Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Company / Freelancer Name *</label>
            <input
              type="text"
              required
              className={inputClass}
              placeholder="Your company or name"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Contact Person *</label>
            <input
              type="text"
              required
              className={inputClass}
              placeholder="Full name"
              value={formData.contact_person}
              onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              type="tel"
              required
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Email *</label>
            <input
              type="email"
              required
              className={inputClass}
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>WhatsApp Number</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="+91 XXXXX XXXXX"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Portfolio Link / Website *</label>
            <input
              type="url"
              required
              className={inputClass}
              placeholder="https://your-portfolio.com"
              value={formData.portfolio_link}
              onChange={(e) => setFormData({ ...formData, portfolio_link: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>City / Location</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Your city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Software & Experience */}
      <div>
        <h4 className="font-display text-xl text-gold mb-6">Expertise</h4>
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Software Used *</label>
            <div className="flex flex-wrap gap-3">
              {SOFTWARE_OPTIONS.map((sw) => (
                <button
                  key={sw}
                  type="button"
                  onClick={() => handleSoftwareToggle(sw)}
                  className={`px-4 py-2 rounded-full border text-sm transition-all ${
                    formData.software_used.includes(sw)
                      ? "bg-gold/20 border-gold text-gold"
                      : "border-gold/20 text-cream/50 hover:border-gold/40 hover:text-cream/70"
                  }`}
                >
                  {sw}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className={labelClass}>
              Experience with Similar Projects (Residential Luxury / Hospitality)
            </label>
            <textarea
              className={`${inputClass} min-h-[100px] resize-y`}
              placeholder="Describe your experience with luxury residential or hospitality 3D visualization projects..."
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div>
        <h4 className="font-display text-xl text-gold mb-6">Pricing & Timeline</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>Quote for 7 Standard Renders (&#8377;) *</label>
            <input
              type="number"
              required
              min="0"
              className={inputClass}
              placeholder="e.g., 50000"
              value={formData.quote_renders}
              onChange={(e) => setFormData({ ...formData, quote_renders: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Quote for 360&deg; Virtual Tour (&#8377;)</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              placeholder="Optional"
              value={formData.quote_virtual_tour}
              onChange={(e) => setFormData({ ...formData, quote_virtual_tour: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Quote for Walkthrough Video (&#8377;)</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              placeholder="Optional"
              value={formData.quote_walkthrough}
              onChange={(e) => setFormData({ ...formData, quote_walkthrough: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Timeline for Delivery (days) *</label>
            <input
              type="number"
              required
              min="1"
              className={inputClass}
              placeholder="e.g., 14"
              value={formData.timeline_days}
              onChange={(e) => setFormData({ ...formData, timeline_days: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Revision Rounds Included *</label>
            <input
              type="number"
              required
              min="0"
              className={inputClass}
              placeholder="e.g., 3"
              value={formData.revision_rounds}
              onChange={(e) => setFormData({ ...formData, revision_rounds: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Additional */}
      <div>
        <h4 className="font-display text-xl text-gold mb-6">Additional Details</h4>
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Payment Terms</label>
            <textarea
              className={`${inputClass} min-h-[80px] resize-y`}
              placeholder="Your preferred payment terms..."
              value={formData.payment_terms}
              onChange={(e) => setFormData({ ...formData, payment_terms: e.target.value })}
            />
          </div>
          <div>
            <label className={labelClass}>Remarks / Questions</label>
            <textarea
              className={`${inputClass} min-h-[80px] resize-y`}
              placeholder="Any questions or additional information..."
              value={formData.remarks}
              onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-gold text-stone-950 font-semibold text-lg rounded-lg hover:bg-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting..." : "Submit Quote"}
      </button>
    </form>
  );
}
