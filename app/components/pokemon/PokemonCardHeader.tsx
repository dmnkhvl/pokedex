import Typography from "../ui/Typography"
import { formatPokemonId, replaceHyphenWithSpace } from "~/utils/formaters"
import type { Pokemon } from "~/types/pokemon"

interface PokemonCardHeaderProps {
  pokemon: Pokemon
}

export default function PokemonCardHeader({ pokemon }: PokemonCardHeaderProps) {
  return (
    <header className="bg-primary flex flex-col items-center justify-center overflow-hidden rounded-xl border-secondary outline-offset-4 outline-primary outline-2">
      <div className="self-start rounded-br-2xl  bg-secondary px-4 h-8 flex justify-center items-center">
        <p className="text-left text-primary  leading-none">{formatPokemonId(pokemon.id)}</p>
      </div>
      {pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} width={160} height={160} />
      )}
      <Typography variant="h1" className="w-full bg-secondary px-4 text-center">
        {replaceHyphenWithSpace(pokemon.name)}
      </Typography>
      <div className="flex w-full justify-center rounded-b-xl border-b-card border-secondary outline-secondary">
        {pokemon.types.map((type, index) => (
          <p key={type.type.name} className="text-lg uppercase text-secondary">
            {type.type.name}
            {index < pokemon.types.length - 1 && <span className="mx-1">&</span>}
          </p>
        ))}
      </div>
    </header>
  )
}
