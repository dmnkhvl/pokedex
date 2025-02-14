import { useState } from "react"
import type { Pokemon } from "~/types/pokemon"
import PokemonGrid from "~/components/pokemon/PokemonGrid"
import type { Route } from "./+types/home"
import Banner from "~/components/ui/Banner"

import { POKEMON_FETCH_LIMIT } from "~/utils/constants"
import Typography from "~/components/ui/Typography"
import SearchBar from "~/components/ui/SearchBar"
import { usePokemonSearch } from "~/hooks/usePokemonSearch"
import Error from "~/components/ui/Error"
import LoadingSpinner from "~/components/ui/LoadingSpinner"
import Button from "~/components/ui/Button"
import { getAllPokemon } from "~/fetchers/pokemon.server"
import { getPokemonDetails } from "~/fetchers/pokemon"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokédex - Explore All Pokémon" },
    {
      name: "description",
      content:
        "Discover detailed information about all Pokémon, including stats, abilities, and evolutions.",
    },
  ]
}

export async function loader() {
  const { data: allPokemonList, error: allPokemonListError } = await getAllPokemon()
  const { data: initialPokemon, error: pokemonDetailsError } = await getPokemonDetails(
    allPokemonList,
    0,
    POKEMON_FETCH_LIMIT
  )
  return {
    allPokemonList,
    initialPokemon,
    allPokemonListError,
    pokemonDetailsError,
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { allPokemonList, initialPokemon, allPokemonListError, pokemonDetailsError } = loaderData
  const [loadedPokemon, setLoadedPokemon] = useState<Pokemon[]>(initialPokemon)
  const [currentOffset, setCurrentOffset] = useState<number>(POKEMON_FETCH_LIMIT)
  const [newPokemonError, setNewPokemonError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    searchInput,
    searchResults,
    isSearching,
    isLoading: isSearchLoading,
    handleInputChange,
    clearSearch,
  } = usePokemonSearch(allPokemonList)

  async function loadMore() {
    setIsLoading(true)
    const { data: newPokemon, error } = await getPokemonDetails(
      allPokemonList,
      currentOffset,
      POKEMON_FETCH_LIMIT
    )
    setIsLoading(false)
    if (error) {
      setNewPokemonError(error)
      return
    }
    setLoadedPokemon((prev) => [...prev, ...newPokemon])
    setCurrentOffset((prev) => prev + POKEMON_FETCH_LIMIT)
  }

  const displayedPokemon = isSearching ? searchResults : loadedPokemon
  const noResult = searchInput && displayedPokemon.length === 0

  if (allPokemonListError || pokemonDetailsError || newPokemonError) {
    return (
      <Error
        message={
          allPokemonListError ||
          pokemonDetailsError ||
          newPokemonError ||
          "An unknown error occurred"
        }
      />
    )
  }

  return (
    <section className="container mx-auto flex flex-col gap-y-8 lg:gap-y-12 px-10 sm:px-4 py-8 min-h-screen">
      <Banner />

      <SearchBar value={searchInput} onChange={handleInputChange} onClear={clearSearch} />
      {isSearchLoading && (
        <div className="flex flex-col gap-y-2 justify-center items-center w-full">
          <div className="w-6 h-6 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {noResult && !isSearchLoading && (
        <div className="flex flex-col justify-center items-center w-full">
          <Typography variant="h1">Oh no, Trainer!</Typography>
          <p className="uppercase text-center">
            Your search didn't catch any Pokémon. Maybe try another search.
          </p>
        </div>
      )}

      {displayedPokemon.length > 0 && !isSearchLoading && (
        <>
          <PokemonGrid pokemon={displayedPokemon} />
          <footer className="flex justify-center">
            {!isSearching && currentOffset < allPokemonList.length && (
              <Button type="button" onClick={loadMore} disabled={isLoading}>
                {isLoading ? <LoadingSpinner size="sm" color="onDark" /> : "Load more"}
              </Button>
            )}
          </footer>
        </>
      )}
    </section>
  )
}
