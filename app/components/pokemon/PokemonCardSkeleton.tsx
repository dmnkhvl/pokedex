interface PokemonCardSkeletonProps {
  children?: React.ReactNode
}

export default function PokemonCardSkeleton({ children }: PokemonCardSkeletonProps) {
  return (
    <div className="w-full h-[700px] border-default border-secondary rounded-xl flex justify-center items-center">
      {children}
    </div>
  )
}
