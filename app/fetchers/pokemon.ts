import type { NamedAPIResource, Pokemon } from "~/types/pokemon"
import { API_BASE_URL, POKEMON_COUNT } from "~/utils/constants"

type FetchPokemonListResult = {
  data: NamedAPIResource[]
  error: string | null
}

type FetchPokemonDetailsResult = {
  data: Pokemon[]
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

export async function getPokemonDetails(
  pokemonList: NamedAPIResource[],
  start: number,
  limit: number
): Promise<FetchPokemonDetailsResult> {
  try {
    const selectedPokemon = pokemonList.slice(start, start + limit)

    const pokemon: Pokemon[] = await Promise.all(
      selectedPokemon.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        if (!res.ok) throw new Error(`Failed to fetch pokemon details `)
        return res.json()
      })
    )

    return { data: pokemon, error: null }
  } catch (error) {
    return { data: [], error: (error as Error).message }
  }
}
