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
    <div className="flex items-center w-full bg-secondary p-8 rounded-full">
      <div className="relative w-full sm:w-[440px]">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="transition-all duration-200 ease-out outline-2 outline-offset-4 outline-primary bg-primary text-secondary rounded-full px-6 placeholder:text-secondary w-full text-lg  focus:placeholder:text-secondary/70 focus:outline-none  h-12"
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
