interface PokemonStatProps {
  name: string
  value: number
}

export default function PokemonStat({ name, value }: PokemonStatProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-b-4 border-secondary">
      <p className="py-0.5 bg-secondary px-1 text-center text-sm font-medium uppercase text-primary">
        {name}
      </p>
      <p className="text-center font-medium uppercase">{value}</p>
    </div>
  )
}
