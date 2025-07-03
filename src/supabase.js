import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://YOUR-PROJECT.supabase.co";
const supabaseKey = "YOUR_PUBLIC_ANON_KEY";

export const supabase = createClient(supabaseUrl, supabaseKey);
