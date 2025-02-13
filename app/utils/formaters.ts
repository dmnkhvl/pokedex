export function replaceHyphenWithSpace(input: string): string {
  return input.replace(/-/g, " ")
}

export function formatPokemonId(id: number): string {
  return `#${id.toString().padStart(3, "0")}`
}
