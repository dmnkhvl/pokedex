import type { NamedAPIResource, Pokemon } from "~/types/pokemon"
import { API_BASE_URL, POKEMON_COUNT } from "~/utils/constants"

export async function getAllPokemon() {
  try {
    const response = await fetch(`${API_BASE_URL}pokemon?limit=${POKEMON_COUNT}`)
    if (!response.ok) throw new Error("Failed to fetch Pokémon data")

    const data = await response.json()
    return data.results as NamedAPIResource[]
  } catch (error) {
    console.error("Error fetching all pokemon:", error)
    return []
  }
}

export async function getPokemonDetails(
  pokemonList: NamedAPIResource[],
  start: number,
  limit: number
) {
  try {
    const selectedPokemon = pokemonList.slice(start, start + limit)

    const pokemon: Pokemon[] = await Promise.all(
      selectedPokemon.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        if (!res.ok) throw new Error(`Failed to fetch details for ${pokemon.name}`)
        return res.json()
      })
    )

    return pokemon
  } catch (error) {
    console.error("Error fetching pokemon details:", error)
    return []
  }
}
