import { useState, useEffect, useCallback } from "react"
import debounce from "lodash.debounce"
import type { Pokemon, NamedAPIResource } from "~/types/pokemon"
import { getPokemonDetails } from "~/fetchers/pokemon"

export function usePokemonSearch(allPokemonList: NamedAPIResource[]) {
  const [searchInput, setSearchInput] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<Pokemon[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setDebouncedSearchTerm(value)
    }, 300),
    []
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchInput(value)
    debouncedSetSearchTerm(value)

    setIsSearching(value.length > 0)
    setIsLoading(true)
  }

  const clearSearch = () => {
    setSearchInput("")
    setDebouncedSearchTerm("")
    setSearchResults([])
    setIsSearching(false)
    setIsLoading(false)
  }

  useEffect(() => {
    async function performSearch() {
      if (!debouncedSearchTerm) {
        setSearchResults([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)

      const filteredPokemonList = allPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )

      const { data: results } = await getPokemonDetails(
        filteredPokemonList,
        0,
        filteredPokemonList.length
      )

      setSearchResults(results)
      setIsLoading(false)
    }

    performSearch()
  }, [debouncedSearchTerm, allPokemonList])

  return {
    searchInput,
    searchResults,
    isSearching,
    isLoading,
    handleInputChange,
    clearSearch,
  }
}
