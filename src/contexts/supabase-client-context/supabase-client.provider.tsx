import { Database } from '@app-types/database.types';
import { createClient } from '@supabase/supabase-js';
import { ReactNode, useMemo } from 'react';
import { SupabaseClientContext } from './supabase-client.context';

export interface SupabaseClientContextProviderProps {
  children: ReactNode;
}

export function SubaseClientProvider({
  children,
}: SupabaseClientContextProviderProps) {
  const supabaseClient = useMemo(
    () =>
      createClient<Database>(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      ),
    []
  );

  return (
    <SupabaseClientContext.Provider value={supabaseClient}>
      {children}
    </SupabaseClientContext.Provider>
  );
}
