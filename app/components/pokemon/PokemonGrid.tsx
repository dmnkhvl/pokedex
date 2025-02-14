import PokemonCard from "./PokemonCard"
import Typography from "../ui/Typography"
import type { Pokemon } from "~/types/pokemon"
import Button from "../ui/Button"

interface PokemonGridProps {
  pokemon: Pokemon[] | undefined
  loadMore?: () => void
  hasMore: boolean
}

export default function PokemonGrid({ pokemon, loadMore, hasMore }: PokemonGridProps) {
  return (
    <div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {pokemon?.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>

      <footer className="flex justify-center my-6">
        {hasMore && (
          <Button type="button" onClick={loadMore}>
            Load more
          </Button>
        )}
      </footer>
    </div>
  )
}
