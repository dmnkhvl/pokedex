import useSWR from 'swr'
import { Pokemon } from '@/types/pokemon'
import { fetcher } from '@/utils/fetchers'

interface PokemonDetailReturn {
  pokemon: Pokemon | undefined
  error: Error | undefined
  isLoading: boolean
  isError: boolean
}

export function usePokemonDetail(url: string): PokemonDetailReturn {
  const { data, error, isValidating, isLoading } = useSWR<Pokemon>(url, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 24 * 60 * 60 * 1000, // 1 day
  })

  return {
    pokemon: data,
    error,
    isLoading: isValidating || isLoading,
    isError: error != null || (data == null && !isLoading),
  }
}
