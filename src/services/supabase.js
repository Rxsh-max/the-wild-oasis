
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://mccczxpyzhnvfvmubxip.supabase.co'
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jY2N6eHB5emhudmZ2bXVieGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NjkxNjUsImV4cCI6MjA4OTE0NTE2NX0.RzP_sAZhQ2E5Cj_geBhxR2BkNMTxkHWcZAp4WMXu6SY'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;