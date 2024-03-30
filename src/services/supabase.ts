import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://sgsgebwkruosmjeqyxhs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnc2dlYndrcnVvc21qZXF5eGhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MTkzNzgsImV4cCI6MjAyNzI5NTM3OH0.0uZ5vi4OtJg4p5Inps5lT4OANTsHYCwiTBQoTKg_ztY";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export default supabase;
