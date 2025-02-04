import Banner from '@/components/ui/Banner'
import PokemonGrid from '@/components/pokemon/PokemonGrid'

export default async function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-y-8 lg:gap-y-12 px-10 sm:px-4 py-8 min-h-screen">
      <Banner />
      <PokemonGrid />
    </main>
  )
}
