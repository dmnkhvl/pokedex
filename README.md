# Pokédex

[DEMO - hosted on Vercel](https://pokedex-smoky-beta.vercel.app)

Built with Next.js, TypeScript, and Tailwind CSS to deliver a responsive, modern, and efficient user experience. [PokeAPI](https://pokeapi.co/) was chosen as a data source.

## Features

- <b>Pokémon Cards</b>: Display detailed information on each Pokémon.
- <b>Load more</b>: Additional loading of Pokémon.
- <b>Search functionality</b>: Quickly find Pokémon by name.
- <b>Responsive design</b>: Optimized for devices of all sizes.
- <b>Modal details</b>: Click on a Pokémon card to view an in-depth list of moves in a modal.
- <b>Loading states and error handling</b>

## Tech Stack

- [React Router v7](https://reactrouter.com/) - As a fullstack framework
- [TypeScript](https://www.typescriptlang.org/): Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [React Router Loaders](https://reactrouter.com/en/main/guides/data-loading) - Data fetching
- [class-variance-authority](https://cva.style/docs): Component variants (Simplifies managing component variants, ensuring consistency across the UI.)

## Data layer

### **React Router Loaders**

The app uses React Router loaders to fetch Pokémon data before the page loads, ensuring an optimal user experience. This avoids unnecessary client-side fetches and improves performance.

### **Client-side Fetching**

- **Load More Pokémon**: Fetches additional Pokémon details dynamically.
- **Search Functionality**: Uses a prefetched list and a debounced input to quickly find Pokémon by name.

It results in:

- ⚡ **Fast initial load** via pre-fetched data.
- 🔍 **Instant search results** with optimized client-side fetching.
- 🔄 **Efficient updates** using React Router loaders.

## Styles

I chose Tailwind CSS for its excellent developer experience, ease of prototyping, and seamless adaptability across different screen sizes.

For few component in UI library I chose CVA to handle different variants and sizes, to ensure scalable and maintable components.

## To run locally

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.
