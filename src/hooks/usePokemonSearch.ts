import useSWR from 'swr'
import { NamedAPIResourceList } from '@/types/pokemon'
import { fetcher } from '@/utils/fetchers'

export function usePokemonSearch(query: string) {
  const baseUrl = process.env.NEXT_PUBLIC_POKEAPI_BASE_URL

  const url = `${baseUrl}pokemon?limit=1118`

  const { data, error, isLoading } = useSWR<NamedAPIResourceList>(url, fetcher)

  const filteredResults = data
    ? data.results.filter((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase()))
    : []

  return { results: filteredResults, error, isLoading }
}
