import Typography from "../ui/Typography"

interface PokemonStatProps {
  name: string
  value: number
}

export default function PokemonStat({ name, value }: PokemonStatProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-b-4 border-secondary">
      <Typography
        variant="body3"
        className="py-0.5 bg-secondary px-1 text-center font-medium uppercase"
      >
        {name}
      </Typography>
      <Typography variant="body2" onDark={false} className="text-center font-medium uppercase">
        {value}
      </Typography>
    </div>
  )
}
