import Image from 'next/image'
import Typography from '../ui/Typography'
import { Pokemon } from '@/types/pokemon'
import { replaceHyphenWithSpace, formatPokemonId } from '@/utils/formaters'

interface PokemonCardHeaderProps {
  pokemon: Pokemon
}

export default function PokemonCardHeader({ pokemon }: PokemonCardHeaderProps) {
  return (
    <header className="bg-primary flex flex-col items-center justify-center overflow-hidden rounded-xl border-secondary outline outline-default outline-secondary">
      <div className="self-start rounded-br-xl bg-secondary px-4">
        <p className="text-left text-primary">{formatPokemonId(pokemon.id)}</p>
      </div>
      {pokemon.sprites.front_default && (
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={160}
          height={160}
          priority
        />
      )}
      <Typography variant="h1" className="w-full bg-secondary px-4 text-center text-primary">
        {replaceHyphenWithSpace(pokemon.name)}
      </Typography>
      <div className="flex w-full justify-center rounded-b-xl border-b-card border-secondary outline-secondary">
        {pokemon.types.map((type, index) => (
          <p key={type.type.name} className="text-lg uppercase">
            {type.type.name}
            {index < pokemon.types.length - 1 && <span className="mx-1">&</span>}
          </p>
        ))}
      </div>
    </header>
  )
}
