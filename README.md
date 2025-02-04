# Pokédex

Built with Next.js, TypeScript, and Tailwind CSS to deliver a responsive, modern, and efficient user experience. [PokeAPI](https://pokeapi.co/) was chosen as a data source.

## Features

- <b>Pokémon Cards</b>: Display detailed information on each Pokémon.
- <b>Load more</b>: Additional loading of Pokémon.
- <b>Search functionality</b>: Quickly find Pokémon by name.
- <b>Responsive design</b>: Optimized for devices of all sizes.
- <b>Modal details</b>: Click on a Pokémon card to view an in-depth list of moves in a modal.
- <b>Loading states and error handling</b>

## Tech Stack

- [Next.js 14](https://nextjs.org/): Fullstack framework
- [TypeScript](https://www.typescriptlang.org/): Type safety
- [Tailwind CSS](https://tailwindcss.com/): Styling
- [SWR](https://swr.vercel.app/): Data fetching (Enables efficient data fetching with built-in caching, revalidation, and error handling)
- [class-variance-authority](https://cva.style/docs): Component variants (Simplifies managing component variants, ensuring consistency across the UI.)

## Notes

### Data layer

While building the application, there were several ways to get data, including using Next.js to pre-render pages for better SEO. I chose SWR and I did so for several key reasons.

- A considerably improved user experience
  SWR offers caching, data revalidation and optimistic UI updates. Users experience exceptionally fast, highly responsive interactions, even with severely poor network conditions.
- Streamlined processes have improved client-side data management.
  Using SWR for client-side data fetching improves code maintainability and simplifies reasoning. This method avoids the complexities natural in synchronizing server-rendered data and all client-side state.
- Flexibility and performance are both extraordinary and optimal.

Although SSR increases SEO the app focused on interactive user experiences. This made the trade-off acceptable. With SWR the application can easily handle real-time data updates and background revalidation

### Styling

I prefer using Tailwind CSS in my project, simply for the developer experience and pretty easy prototyping as well as adapting the app for different screen sizes.

For few component in UI library I chose CVA to handle different variants and sizes, to ensure scalable and maintable components.

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/pokedex.git
cd pokedex
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_POKEAPI_BASE_URL=https://pokeapi.co/api/v2
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
