import { MveImageField } from '@app-types/mve-image-field.type';
import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from './use-supabase-client.hook';

export interface UseDataMveImageFieldsHook {
  isLoading: boolean;
  isRefetching: boolean;
  fields?: MveImageField[];
}

/**
 * Provides the list of MVEs from the server
 */
export function useDataMveImageFields(
  mveImageId?: string
): UseDataMveImageFieldsHook {
  const supabaseClient = useSupabaseClient();
  const {
    isLoading,
    isRefetching,
    data: fields,
  } = useQuery({
    enabled: !!mveImageId,
    queryKey: ['mve-fields',  { mveImageId }],
    queryFn: async () => {
      const { data, error } = await supabaseClient
        .from('fields')
        .select()
        .eq('mve_image_id', mveImageId!);
      if (error) throw error;
      return data;
    },
    throwOnError: true,
    staleTime: 60 * 1000,
  });

  return { isLoading, isRefetching, fields };
}
