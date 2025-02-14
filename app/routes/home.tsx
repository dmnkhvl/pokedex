import type { NamedAPIResource, Pokemon } from "~/types/pokemon"
import PokemonGrid from "~/components/pokemon/PokemonGrid"
import type { Route } from "./+types/home"

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
  const baseUrl = process.env.NEXT_PUBLIC_POKEAPI_BASE_URL
  const limit = 20

  try {
    const response = await fetch(`${baseUrl}pokemon?limit=${limit}`)
    if (!response.ok) throw new Error("Failed to fetch Pokémon data")

    const data = await response.json()
    const pokemonList: NamedAPIResource[] = data.results

    const pokemon: Pokemon[] = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        if (!res.ok) throw new Error("Failed to fetch Pokémon details")
        return res.json()
      })
    )

    return { pokemon }
  } catch (error) {
    return { pokemon: [] }
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { pokemon } = loaderData
  const pokemonLoaded = pokemon.length > 0

  return <section>{pokemonLoaded && <PokemonGrid pokemon={pokemon} />}</section>
}
