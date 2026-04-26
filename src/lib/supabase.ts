// Supabase client — will be configured when credentials are provided
// For now, all data is served from static TypeScript files

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export function isSupabaseConfigured(): boolean {
    return !!(supabaseUrl && supabaseAnonKey);
}

// When ready to use Supabase:
// npm install @supabase/supabase-js
// import { createClient } from '@supabase/supabase-js';
// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
