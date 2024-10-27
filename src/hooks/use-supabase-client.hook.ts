import { Database } from '@app-types/database.types';
import { createClient } from '@supabase/supabase-js';
import { useMemo } from 'react';

/**
 * Provides a Supabase client used to query the app's Supabase service
 */
export function useSupabaseClient() {
  return  useMemo(() =>
    createClient<Database>(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY,
    ),
    []
  );
}
