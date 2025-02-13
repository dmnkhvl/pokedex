import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/theme.css'

import { jersey25 } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'Pokedex',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${jersey25.className} antialiased bg-primary text-secondarymax-w-screen-xl mx-auto`}
      >
        {children}
      </body>
    </html>
  )
}
