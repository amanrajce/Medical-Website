import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client if environment variables are not available
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : {
      from: () => ({
        insert: () => Promise.resolve({ error: new Error('Supabase not connected. Please connect to Supabase to enable database functionality.') }),
        select: () => Promise.resolve({ data: [], error: null }),
        update: () => Promise.resolve({ error: new Error('Supabase not connected. Please connect to Supabase to enable database functionality.') }),
        delete: () => Promise.resolve({ error: new Error('Supabase not connected. Please connect to Supabase to enable database functionality.') })
      }),
      functions: {
        invoke: () => Promise.resolve({ error: new Error('Supabase not connected. Please connect to Supabase to enable email functionality.') })
      }
    } as any