import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Box from '@mui/material/Box'
import './globals.css'
import AppProviders from '@/providers/AppProviders'

const outfit = Outfit({ variable: '--font-outfit', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Next.js + Material UI (MUI) Template',
    template: '%s | Next.js + Material UI Template',
  },
  description:
    'A production-ready Next.js starter template featuring Material UI (MUI), MobX state management, and TanStack React Query.',
  keywords: [
    'Next.js',
    'Material UI',
    'MUI',
    'React',
    'TypeScript',
    'MobX',
    'TanStack React Query',
    'App Router',
    'Starter Template',
  ],
  authors: [{ name: 'PKLoggerVN' }],
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Next.js + Material UI (MUI) Template',
    description:
      'A production-ready Next.js starter template featuring Material UI (MUI), MobX state management, and TanStack React Query.',
    url: 'https://example.com',
    siteName: 'Next.js + Material UI Template',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js + Material UI Template',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js + Material UI (MUI) Template',
    description:
      'A production-ready Next.js starter template featuring Material UI (MUI), MobX state management, and TanStack React Query.',
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={outfit.variable}>
        <AppProviders>
          <Box
            sx={{
              minHeight: '100vh',
              bgcolor: 'background.default',
              color: 'text.primary',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
          </Box>
        </AppProviders>
      </body>
    </html>
  )
}
