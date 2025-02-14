import { useState } from "react"
import type { Pokemon } from "~/types/pokemon"
import PokemonGrid from "~/components/pokemon/PokemonGrid"
import type { Route } from "./+types/home"
import Banner from "~/components/ui/Banner"
import { getAllPokemon, getPokemonDetails } from "~/fetchers/pokemon"
import { POKEMON_FETCH_LIMIT } from "~/utils/constants"
import Typography from "~/components/ui/Typography"
import SearchBar from "~/components/ui/SearchBar"
import { usePokemonSearch } from "~/hooks/usePokemonSearch"

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
  const allPokemonList = await getAllPokemon()
  const initialPokemon = await getPokemonDetails(allPokemonList, 0, POKEMON_FETCH_LIMIT)
  return {
    allPokemonList,
    initialPokemon,
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { allPokemonList, initialPokemon } = loaderData
  const [loadedPokemon, setLoadedPokemon] = useState<Pokemon[]>(initialPokemon)
  const [currentOffset, setCurrentOffset] = useState<number>(POKEMON_FETCH_LIMIT)

  const { searchInput, searchResults, isSearching, handleInputChange, clearSearch } =
    usePokemonSearch(allPokemonList)

  async function loadMore() {
    const newPokemon = await getPokemonDetails(allPokemonList, currentOffset, POKEMON_FETCH_LIMIT)
    setLoadedPokemon((prev) => [...prev, ...newPokemon])
    setCurrentOffset((prev) => prev + POKEMON_FETCH_LIMIT)
  }

  const displayedPokemon = isSearching ? searchResults : loadedPokemon
  const noResult = searchInput && displayedPokemon.length === 0

  return (
    <section className="container mx-auto flex flex-col gap-y-8 lg:gap-y-12 px-10 sm:px-4 py-8 min-h-screen">
      <Banner />
      <SearchBar value={searchInput} onChange={handleInputChange} onClear={clearSearch} />
      {noResult && (
        <div className="flex flex-col justify-center items-center w-full">
          <Typography variant="h1">Oh no, Trainer!</Typography>
          <p className="uppercase">
            Your search didn't catch any Pokémon. Maybe try another search.
          </p>
        </div>
      )}
      {displayedPokemon.length > 0 && (
        <PokemonGrid
          pokemon={displayedPokemon}
          loadMore={loadMore}
          hasMore={!isSearching && currentOffset < allPokemonList.length}
        />
      )}
    </section>
  )
}
