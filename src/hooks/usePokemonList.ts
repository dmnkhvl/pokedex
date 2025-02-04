import useSWRInfinite from 'swr/infinite'
import { NamedAPIResourceList } from '@/types/pokemon'
import { fetcher } from '@/utils/fetchers'

export function usePokemonList() {
  const baseUrl = process.env.NEXT_PUBLIC_POKEAPI_BASE_URL
  const limit = 20

  const getKey = (pageIndex: number, previousPageData: NamedAPIResourceList | null) => {
    if (previousPageData && previousPageData.results.length === 0) return null
    return `${baseUrl}pokemon?offset=${pageIndex * limit}&limit=${limit}`
  }

  const { data, error, size, setSize, isValidating } = useSWRInfinite<NamedAPIResourceList>(
    getKey,
    fetcher,
    { revalidateOnFocus: false }
  )

  const pokemonList = data ? data.flatMap((page) => page.results) : []

  return {
    pokemonList,
    error,
    isLoading: !data && !error,
    isFetchingMore: Boolean(isValidating && data),
    loadMore: () => setSize(size + 1),
    hasMore: data ? data[data.length - 1].results.length > 0 : true,
  }
}
