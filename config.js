// Supabase configuration
// Replace these with your actual Supabase project URL and anon key
const SUPABASE_URL = 'https://sfhsdhurtipcvobswoyh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmaHNkaHVydGlwY3ZvYnN3b3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTM4ODYsImV4cCI6MjA2NTc2OTg4Nn0.V0Wh-lfkmkBvPeJUQ8c4UlRqKUF9AzYzy_Dis4fNwVw'

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)