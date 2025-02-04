'use client'

import { useState, useMemo } from 'react'
import { debounce } from 'lodash'
import PokemonCard from './PokemonCard'
import Button from '../ui/Button'
import Error from '../ui/Error'
import LoadingSpinner from '../ui/LoadingSpinner'
import { usePokemonList } from '@/hooks/usePokemonList'
import { usePokemonSearch } from '@/hooks/usePokemonSearch'
import SearchBar from '../ui/SearchBar'
import Typography from '../ui/Typography'

export default function PokemonGrid() {
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const debouncedSetSearchQuery = useMemo(
    () =>
      debounce((query: string) => {
        setSearchQuery(query)
      }, 300),
    []
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    debouncedSetSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchInput('')
    setSearchQuery('')
  }

  const {
    pokemonList,
    error: listError,
    isLoading: isListLoading,
    loadMore,
    hasMore,
  } = usePokemonList()

  const {
    results: searchResults,
    error: searchError,
    isLoading: isSearchLoading,
  } = usePokemonSearch(searchQuery)

  const isSearching = searchQuery.length > 0
  const error = isSearching ? searchError : listError
  const isLoading = isSearching ? isSearchLoading : isListLoading
  const pokemon = isSearching ? searchResults : pokemonList

  if (error) {
    console.error('Pokémon API Error:', error)
    return <Error message={error.message || 'Error fetching Pokémon'} />
  }

  return (
    <div>
      {!isLoading && (
        <SearchBar value={searchInput} onChange={handleInputChange} onClear={clearSearch} />
      )}

      {pokemon.length > 1 ? (
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pokemon.map((pokemon) => (
            <PokemonCard url={pokemon.url} key={pokemon.name} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full ">
          <Typography variant="h1">Oh no, Trainer!</Typography>
          <p className="uppercase">
            {' '}
            Your search didn't catch any Pokémon. Maybe try another search.
          </p>
        </div>
      )}

      <footer className="flex justify-center my-6">
        {isLoading && <LoadingSpinner />}
        {!isSearching && !isLoading && hasMore && (
          <Button type="button" onClick={loadMore}>
            Load more
          </Button>
        )}
      </footer>
    </div>
  )
}
