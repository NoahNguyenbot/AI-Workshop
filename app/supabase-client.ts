import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

// Created on first use, in the browser, so the build does not need the keys
// to be present. The session is saved in the browser's localStorage, which is
// why it survives closing the tab.
export function getSupabase(): SupabaseClient {
  if (!client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) {
      throw new Error("Supabase URL or publishable key is not set.");
    }
    client = createClient(url, key);
  }
  return client;
}
