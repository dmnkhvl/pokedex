import React from "react"
import SearchIcon from "../../assets/icons/search.svg?react"
import CloseIcon from "../../assets/icons/close.svg?react"

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
    <div className="flex items-center w-full justify-center">
      <div className="transition-all duration-200 ease-out relative w-full sm:w-[480px] focus:outline-offset-0 outline-primary bg-primary text-secondary rounded-full flex outline-2 outline-offset-4 px-6 h-12 justify-center items-center gap-x-2">
        <SearchIcon />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className=" placeholder:text-secondary w-full text-lg focus:placeholder:text-secondary/70 focus:outline-none "
        />
        {value && (
          <button
            onClick={onClear}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-secondary rounded-full  text-primary text-sm h-6 w-6 flex justify-center items-center"
          >
            <CloseIcon width="14" height="14" />
          </button>
        )}
      </div>
    </div>
  )
}
