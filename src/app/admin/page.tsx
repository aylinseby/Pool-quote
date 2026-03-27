"use client";

import { useState, useEffect, useCallback } from "react";
import { QuoteSubmission } from "@/lib/supabase";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [quotes, setQuotes] = useState<QuoteSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedQuote, setSelectedQuote] = useState<QuoteSubmission | null>(null);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quotes", {
        headers: { "x-admin-password": password },
      });
      if (!res.ok) {
        if (res.status === 401) {
          setAuthenticated(false);
          setError("Invalid password");
          return;
        }
        throw new Error("Failed to fetch quotes");
      }
      const data = await res.json();
      setQuotes(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load quotes");
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    if (authenticated) {
      fetchQuotes();
    }
  }, [authenticated, fetchQuotes]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthenticated(true);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl text-gold text-center mb-2">Admin Access</h1>
          <p className="text-cream/40 text-sm text-center mb-8">3D Visualization RFQ Dashboard</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-cream/[0.03] border border-gold/20 rounded-lg px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-gold text-stone-950 font-semibold rounded-lg hover:bg-gold-light transition-all"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const formatCurrency = (val: number | null | undefined) =>
    val ? `\u20B9${val.toLocaleString("en-IN")}` : "—";

  return (
    <div className="min-h-screen bg-stone-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl text-gold">Quote Submissions</h1>
            <p className="text-cream/40 text-sm mt-1">3D Visualization RFQ — {quotes.length} submissions</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchQuotes}
              className="px-4 py-2 border border-gold/20 text-gold text-sm rounded-lg hover:bg-gold/5 transition-all"
            >
              Refresh
            </button>
            <a
              href="/"
              className="px-4 py-2 border border-gold/20 text-cream/50 text-sm rounded-lg hover:bg-cream/5 transition-all"
            >
              View Site
            </a>
          </div>
        </div>

        {loading && <p className="text-cream/40 text-center py-16">Loading submissions...</p>}

        {!loading && quotes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-cream/30">No quotes submitted yet.</p>
          </div>
        )}

        {!loading && quotes.length > 0 && (
          <div className="grid gap-4">
            {quotes.map((q, i) => (
              <div
                key={q.id || i}
                onClick={() => setSelectedQuote(selectedQuote?.id === q.id ? null : q)}
                className="bg-cream/[0.03] border border-gold/10 rounded-xl p-6 cursor-pointer hover:border-gold/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-cream font-medium">{q.company_name}</h3>
                    <p className="text-cream/40 text-sm">{q.contact_person} &middot; {q.email}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <p className="text-gold font-semibold">{formatCurrency(q.quote_renders)}</p>
                      <p className="text-cream/30 text-xs">7 renders</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cream/60">{q.timeline_days} days</p>
                      <p className="text-cream/30 text-xs">delivery</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cream/60">{q.revision_rounds} rounds</p>
                      <p className="text-cream/30 text-xs">revisions</p>
                    </div>
                  </div>
                </div>

                {selectedQuote?.id === q.id && (
                  <div className="mt-6 pt-6 border-t border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3">
                      <div><span className="text-cream/40">Phone:</span> <span className="text-cream/70">{q.phone}</span></div>
                      <div><span className="text-cream/40">WhatsApp:</span> <span className="text-cream/70">{q.whatsapp || "—"}</span></div>
                      <div><span className="text-cream/40">City:</span> <span className="text-cream/70">{q.city || "—"}</span></div>
                      <div><span className="text-cream/40">Portfolio:</span> <a href={q.portfolio_link} target="_blank" rel="noopener noreferrer" className="text-gold underline">{q.portfolio_link}</a></div>
                      <div><span className="text-cream/40">Software:</span> <span className="text-cream/70">{q.software_used?.join(", ") || "—"}</span></div>
                    </div>
                    <div className="space-y-3">
                      <div><span className="text-cream/40">360° Tour:</span> <span className="text-cream/70">{formatCurrency(q.quote_virtual_tour)}</span></div>
                      <div><span className="text-cream/40">Walkthrough:</span> <span className="text-cream/70">{formatCurrency(q.quote_walkthrough)}</span></div>
                      <div><span className="text-cream/40">Payment Terms:</span> <span className="text-cream/70">{q.payment_terms || "—"}</span></div>
                    </div>
                    {q.experience && (
                      <div className="md:col-span-2">
                        <span className="text-cream/40">Experience:</span>
                        <p className="text-cream/60 mt-1">{q.experience}</p>
                      </div>
                    )}
                    {q.remarks && (
                      <div className="md:col-span-2">
                        <span className="text-cream/40">Remarks:</span>
                        <p className="text-cream/60 mt-1">{q.remarks}</p>
                      </div>
                    )}
                    <div className="md:col-span-2 text-cream/20 text-xs">
                      Submitted: {q.created_at ? new Date(q.created_at).toLocaleString("en-IN") : "—"}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
