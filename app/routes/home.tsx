import { type LoaderFunction } from "react-router"
import type { Route } from "../+types/root"
import type { NamedAPIResource, Pokemon } from "~/types/pokemon"
import PokemonGrid from "~/components/pokemon/PokemonGrid"

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

export const loader: LoaderFunction = async () => {
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

    return {
      pokemon,
    }
  } catch (error) {
    return { pokemon: [] }
  }
}

interface HomeProps {
  loaderData: { pokemon: Pokemon[] }
}

export default function Home({ loaderData }: HomeProps) {
  const { pokemon } = loaderData

  return (
    <main className="container mx-auto flex flex-col gap-y-8 lg:gap-y-12 px-10 sm:px-4 py-8 min-h-screen">
      {pokemon.length > 0 && <PokemonGrid pokemon={pokemon} />}
    </main>
  )
}
