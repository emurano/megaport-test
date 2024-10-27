import { SupabaseClientContext } from '@contexts/supabase-client-context/supabase-client.context';
import { useContext } from 'react';

/**
 * Provides a Supabase client used to query the app's Supabase service
 */
export function useSupabaseClient() {
  const supabaseClient = useContext(SupabaseClientContext);

  // This is guaranteed to be set. Its type is only null to satisfy the context API
  return supabaseClient!;
}
