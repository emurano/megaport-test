import { MveImage } from '@app-types/mve-image.type';
import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from './use-supabase-client.hook';

export interface UseDataMveImagesHook {
  isLoading: boolean;
  isRefetching: boolean;
  mveImages?: MveImage[];
}

/**
 * Provides the list of MVEs from the server
 */
export function useDataMveImages(): UseDataMveImagesHook {
  const supabaseClient = useSupabaseClient();
  const {
    isLoading,
    isRefetching,
    data: mveImages,
  } = useQuery({
    enabled: true,
    queryKey: ['mve-list'],
    queryFn: async () => {
      const { data, error } = await supabaseClient.from('mve_images').select();
      if (error) throw error;
      return data;
    },
    throwOnError: true,
  });

  return { isLoading, isRefetching, mveImages };
}
