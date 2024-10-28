import { MveImageField } from '@app-types/mve-image-field.type';
import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from './use-supabase-client.hook';

export interface UseDataMveImageFieldHook {
  isLoading: boolean;
  isRefetching: boolean;
  field?: MveImageField;
}

/**
 * Provides the list of MVEs from the server
 */
export function useDataMveImageField(
  mveImageFieldId?: string
): UseDataMveImageFieldHook {
  const supabaseClient = useSupabaseClient();
  const {
    isLoading,
    isRefetching,
    data: field,
  } = useQuery({
    enabled: !!mveImageFieldId,
    queryKey: ['mve-field',  { mveImageFieldId }],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from('fields')
        .select()
        .eq('id', mveImageFieldId!)
        .single();
      if (error) throw error;
      return data;
    },
    throwOnError: true,
    staleTime: 60 * 1000,
  });

  return { isLoading, isRefetching, field };
}
