import React from "react"
import Button from "./Button"

interface SearchBarProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  placeholder?: string
}

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search Pokémon...",
}: SearchBarProps) {
  return (
    <div className="pb-8 lg:pb-12 flex items-center justify-center w-full">
      <div className="relative w-full sm:w-[440px] mx-auto">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="transition-all duration-200 ease-out border-b-card border-default border-secondary bg-primary text-secondary py-2 rounded-full px-8 placeholder:text-secondary w-full text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
        />
        {value && (
          <button
            onClick={onClear}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full px-2 text-primary text-sm h-6 w-6"
          >
            X
          </button>
        )}
      </div>
    </div>
  )
}
