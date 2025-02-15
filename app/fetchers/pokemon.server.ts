import type { NamedAPIResource } from "~/types/pokemon"
import { API_BASE_URL, POKEMON_COUNT } from "~/utils/constants"

type FetchPokemonListResult = {
  data: NamedAPIResource[]
  error: string | null
}

export async function getAllPokemon(): Promise<FetchPokemonListResult> {
  try {
    const response = await fetch(`${API_BASE_URL}pokemon?limit=${POKEMON_COUNT}`)
    if (!response.ok) throw new Error("Failed to fetch Pokémon data")

    const data = await response.json()
    return { data: data.results as NamedAPIResource[], error: null }
  } catch (error) {
    return { data: [], error: (error as Error).message }
  }
}
