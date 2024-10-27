import { Database } from '@app-types/database.types';
import { SupabaseClient } from '@supabase/supabase-js';
import { createContext } from 'react';

export type SupabaseClientContextType = SupabaseClient<Database>;

export const SupabaseClientContext =
  createContext<SupabaseClientContextType | null>(null);
