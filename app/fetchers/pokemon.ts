import type { NamedAPIResource, Pokemon } from "~/types/pokemon"

type FetchPokemonDetailsResult = {
  data: Pokemon[]
  error: string | null
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
