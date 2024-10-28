import { MveImage } from '@app-types/mve-image.type';
import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from './use-supabase-client.hook';

export type MveImagesSortItem = 'name' | 'description';

export const MveImagesSortItems: Array<{
  name: string;
  item: MveImagesSortItem;
}> = [
  { name: 'Name', item: 'name' },
  { name: 'Description', item: 'description' },
];

export type MveImagesSortDirection = 'asc' | 'desc';

export interface UseDataMveImagesOptions {
  sortBy?: MveImagesSortItem;
  sortDirection?: MveImagesSortDirection;
  searchText?: string;
}

export interface UseDataMveImagesHook {
  isLoading: boolean;
  isRefetching: boolean;
  mveImages?: MveImage[];
}

/**
 * Provides the list of MVEs from the server
 */
export function useDataMveImages(
  options: UseDataMveImagesOptions = {}
): UseDataMveImagesHook {
  const supabaseClient = useSupabaseClient();
  const {
    isLoading,
    isRefetching,
    data: mveImages,
  } = useQuery({
    enabled: true,
    queryKey: ['mve-list', options],
    queryFn: async () => {
      const orderBy = options.sortBy ?? 'id';
      const orderOptions = {
        ascending: options.sortDirection !== 'desc',
      };
      const searchText = (options.searchText ?? '').trim();

      let query = supabaseClient
        .from('mve_images')
        .select()
        .order(orderBy, orderOptions);

      if (searchText.length > 0) {
        query = query.or(`name.ilike.%${searchText}%,description.ilike.%${searchText}%`)
      }

      const { data, error } = await query;

      if (error) throw error;
      return data;
    },
    throwOnError: true,
  });

  return { isLoading, isRefetching, mveImages };
}
