import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import './globals.css'
import AppProviders from '@/providers/AppProviders'

const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chakra UI - Next.js example in TypeScript',
  description:
    'This is an example of how to use Chakra UI with Next.js. It is a simple example of how to use Chakra UI with Next.js.',
  keywords: ['chakra-ui', 'nextjs', 'typescript', 'ui', 'learning', 'infosec'],
  authors: [{ name: 'Author' }],
  metadataBase: new URL('https://example.com'), // TODO: Replace with actual domain
  openGraph: {
    title: 'Chakra UI - Next.js example in TypeScript',
    description:
      'This is an example of how to use Chakra UI with Next.js. It is a simple example of how to use Chakra UI with Next.js.',
    url: 'https://example.com',
    siteName: 'Chakra UI - Next.js example in TypeScript',
    images: [
      {
        url: '/og-image.png', // Ensure this image exists or plan to add it
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chakra UI - Next.js example in TypeScript',
    description:
      'This is an example of how to use Chakra UI with Next.js. It is a simple example of how to use Chakra UI with Next.js.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={outfit.variable}>
        <AppProviders>
          <Box minH="100vh" display="flex" flexDirection="column">
            <main style={{ flex: 1 }}>{children}</main>
          </Box>
        </AppProviders>
      </body>
    </html>
  )
}
