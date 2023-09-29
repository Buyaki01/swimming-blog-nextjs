import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: "Swimming Blog",
  description: 'Created by Ritta Sweta',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        <Navbar />
        <main className='px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
