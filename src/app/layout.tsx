import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Box } from '@chakra-ui/react'
import './globals.css'
import AppProviders from '@/providers/AppProviders'

const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CyberSecure Community - Learn, Defend, Build',
  description:
    'Join the CyberSecure Community to master cybersecurity. Learn defensive strategies, build secure systems, and connect with experts.',
  keywords: [
    'cybersecurity',
    'security',
    'defense',
    'community',
    'learning',
    'infosec',
  ],
  authors: [{ name: 'CyberSecure Team' }],
  metadataBase: new URL('https://example.com'), // TODO: Replace with actual domain
  openGraph: {
    title: 'CyberSecure Community',
    description:
      'An open cybersecurity community to learn, defend, and build together.',
    url: 'https://example.com',
    siteName: 'CyberSecure Community',
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
    title: 'CyberSecure Community',
    description:
      'An open cybersecurity community to learn, defend, and build together.',
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
          <Box
            minH="100vh"
            display="flex"
            flexDirection="column"
          >
            <main style={{ flex: 1 }}>
              {children}
            </main>
          </Box>
        </AppProviders>
      </body>
    </html>
  )
}
