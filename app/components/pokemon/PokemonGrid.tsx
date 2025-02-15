import PokemonCard from "./PokemonCard"
import Typography from "../ui/Typography"
import type { Pokemon } from "~/types/pokemon"
import Button from "../ui/Button"

interface PokemonGridProps {
  pokemon: Pokemon[] | undefined
}

export default function PokemonGrid({ pokemon }: PokemonGridProps) {
  return (
    <div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pokemon?.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  )
}
