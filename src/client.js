import { createClient } from '@supabase/supabase-js'

const URL = 'https://kthfqciwglvserliolbd.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0aGZxY2l3Z2x2c2VybGlvbGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTYzMzksImV4cCI6MTk5NjIzMjMzOX0.MyjsKba6Onl_JVwGl75cEPGUjNIa5mi-FDYGnwfneYA'

export const supabase = createClient(URL, API_KEY);