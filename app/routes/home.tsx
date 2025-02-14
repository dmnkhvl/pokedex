import type { NamedAPIResource, Pokemon } from "~/types/pokemon"
import PokemonGrid from "~/components/pokemon/PokemonGrid"
import type { Route } from "./+types/home"
import Banner from "~/components/ui/Banner"
import { useState } from "react"
import { getPokemonDetails } from "~/fetchers/pokemon"
import { POKEMON_FETCH_LIMIT } from "~/utils/constants"

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
  return getPokemonDetails(POKEMON_FETCH_LIMIT)
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { pokemon } = loaderData
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>(pokemon)
  const [offset, setOffset] = useState<number>(20)

  async function loadMore() {
    const { pokemon: newPokemon } = await getPokemonDetails(POKEMON_FETCH_LIMIT, offset)
    setAllPokemon((prev) => [...prev, ...newPokemon])
    setOffset((prev) => prev + POKEMON_FETCH_LIMIT)
  }

  return (
    <section className="container mx-auto flex flex-col gap-y-8 lg:gap-y-12 px-10 sm:px-4 py-8 min-h-screen ">
      <Banner />
      {allPokemon.length > 0 && <PokemonGrid pokemon={allPokemon} loadMore={loadMore} />}
    </section>
  )
}
