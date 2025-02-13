import PokemonCard from "./PokemonCard"
import Typography from "../ui/Typography"
import type { Pokemon } from "~/types/pokemon"
import Button from "../ui/Button"

interface PokemonGridProps {
  pokemon: Pokemon[] | undefined
  loadMore?: () => void
}

export default function PokemonGrid({ pokemon, loadMore }: PokemonGridProps) {
  const isLoading = false

  return (
    <div>
      {/* <SearchBar value={searchInput} onChange={handleInputChange} onClear={clearSearch} /> */}

      {!isLoading ? (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pokemon?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      ) : (
        !isLoading && (
          <div className="flex flex-col justify-center items-center w-full">
            <Typography variant="h1">Oh no, Trainer!</Typography>
            <p className="uppercase">
              Your search didn't catch any Pokémon. Maybe try another search.
            </p>
          </div>
        )
      )}

      <footer className="flex justify-center my-6">
        {!isLoading && loadMore && (
          <Button type="button" onClick={loadMore}>
            Load more
          </Button>
        )}
      </footer>
    </div>
  )
}
