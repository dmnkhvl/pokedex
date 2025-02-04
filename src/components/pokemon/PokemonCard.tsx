import { Pokemon } from '@/types/pokemon'
import { replaceHyphenWithSpace } from '@/utils/formaters'
import PokemonCardHeader from './PokemonCardHeader'
import PokemonMoves from './PokemonMoves'
import PokemonStat from './PokemonStat'
import useSWR from 'swr'
import { fetcher } from '@/utils/fetchers'
import PokemonCardSkeleton from './PokemonCardSkeleton'
import { usePokemonDetail } from '@/hooks/usePokemonDetail'

interface PokemonCardProps {
  url: string
}

export default function PokemonCard({ url }: PokemonCardProps) {
  const { pokemon, error, isLoading } = usePokemonDetail(url)

  if (isLoading) return <PokemonCardSkeleton />

  if (error || !pokemon) {
    return <PokemonCardSkeleton>Error loading Pokémon details.</PokemonCardSkeleton>
  }

  return (
    <div className="w-full mx-auto flex flex-col gap-y-6 animate-fadeInUp">
      <PokemonCardHeader pokemon={pokemon} />

      <main className="bg-primary overflow-hidden rounded-xl border-b-card border-secondary px-5 py-6 outline outline-default outline-secondary">
        <div className="flex gap-x-4">
          <div className="w-1/2">
            <PokemonMoves moves={pokemon.moves} pokemonName={pokemon.name} />
          </div>
          <div className="flex w-1/2 flex-col gap-y-2">
            <div className="flex flex-col gap-y-2">
              {pokemon.stats.map((stat) => (
                <PokemonStat
                  key={stat.stat.name}
                  name={replaceHyphenWithSpace(stat.stat.name)}
                  value={stat.base_stat}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
