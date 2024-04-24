
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wukbkmwcgwskdhjhugef.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1a2JrbXdjZ3dza2Roamh1Z2VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3ODI5MDYsImV4cCI6MjAyOTM1ODkwNn0.Xo9P2bacNDf7pCUX5r0gBFUzV8UpCeN5v5LIaA3gzg0'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase
