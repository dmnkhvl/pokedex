export interface NamedAPIResourceList {
  count: number
  next: string
  previous: string
  results: NamedAPIResource[]
}

export interface NamedAPIResource {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  forms: NamedAPIResource[]
  game_indices: VersionGameIndex[]
  held_items: PokemonHeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  past_types: PokemonTypePast[]
  sprites: PokemonSprites
  cries: PokemonCries
  species: NamedAPIResource
  stats: PokemonStat[]
  types: PokemonType[]
}

interface PokemonAbility {
  ability: NamedAPIResource
  is_hidden: boolean
  slot: number
}

interface VersionGameIndex {
  game_index: number
  version: NamedAPIResource
}

interface PokemonHeldItem {
  item: NamedAPIResource
  version_details: PokemonHeldItemVersion[]
}

interface PokemonHeldItemVersion {
  version: NamedAPIResource
  rarity: number
}

export interface PokemonMove {
  move: NamedAPIResource
  version_group_details: PokemonMoveVersion[]
}

interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource
  version_group: NamedAPIResource
  level_learned_at: number
}

interface PokemonTypePast {
  generation: NamedAPIResource
  types: PokemonType[]
}

interface PokemonSprites {
  front_default: string | null
  front_shiny: string | null
  back_default: string | null
  back_shiny: string | null
  other?: {
    [key: string]: {
      front_default: string | null
      front_shiny: string | null
    }
  }
}

interface PokemonCries {
  latest: string
  legacy: string
}

interface PokemonStat {
  stat: NamedAPIResource
  effort: number
  base_stat: number
}

interface PokemonType {
  slot: number
  type: NamedAPIResource
}
