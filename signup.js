// supabase.js

const SUPABASE_URL = "https://kzhstchwhobdmqtgpbjx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6aHN0Y2h3aG9iZG1xdGdwYmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxMDEwNTgsImV4cCI6MjA5MjY3NzA1OH0.Pet5e_VD4grq55TZieIhDCh3WI8PuGAKEJpwLA3_eak";

// IMPORTANT: We use window.supabase to grab the library from the CDN
// We name our variable supabaseClient so it doesn't crash your browser!
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);