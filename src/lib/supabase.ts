import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (_supabase) return _supabase;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  _supabase = createClient(url || "https://placeholder.supabase.co", key || "placeholder");
  return _supabase;
}

export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    const client = getSupabaseClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});

export interface QuoteSubmission {
  id?: number;
  created_at?: string;
  company_name: string;
  contact_person: string;
  phone: string;
  email: string;
  whatsapp?: string;
  portfolio_link: string;
  city?: string;
  software_used: string[];
  experience: string;
  quote_renders: number;
  quote_virtual_tour?: number | null;
  quote_walkthrough?: number | null;
  timeline_days: number;
  revision_rounds: number;
  payment_terms?: string;
  remarks?: string;
}
