import type { NamedAPIResource, Pokemon } from "~/types/pokemon"
import { API_BASE_URL } from "~/utils/constants"

export async function getPokemonDetails(limit: number, offset?: number) {
  try {
    const response = await fetch(
      `${API_BASE_URL}pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`
    )
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
