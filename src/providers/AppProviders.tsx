'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createContext, useEffect, useMemo, useState } from 'react'
import theme from '@/theme/theme'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import RootStoreProvider from './RootStoreProvider'
// @ts-ignore
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

export const DirectionContext = createContext({
  direction: 'ltr' as 'ltr' | 'rtl',
  toggleDirection: (_dir: 'ltr' | 'rtl') => {},
})

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr')

  useEffect(() => {
    document.dir = direction
  }, [direction])

  const themeWithDirection = useMemo(
    () => createTheme(theme, { direction }),
    [direction]
  )

  const directionContextValue = useMemo(
    () => ({ direction, toggleDirection: setDirection }),
    [direction]
  )

  const cacheLtr = useMemo(
    () =>
      createCache({
        key: 'css',
        prepend: true,
        stylisPlugins: [],
      }),
    []
  )

  const cacheRtl = useMemo(
    () =>
      createCache({
        key: 'muirtl',
        prepend: true,
        stylisPlugins: [prefixer, rtlPlugin],
      }),
    []
  )

  return (
    <DirectionContext.Provider value={directionContextValue}>
      <QueryClientProvider client={queryClient}>
        <InitColorSchemeScript attribute="class" />

        <AppRouterCacheProvider
          options={{
            key: 'css',
            enableCssLayer: true,
            prepend: true,
            stylisPlugins: [],
          }}
        >
          <CacheProvider value={direction === 'rtl' ? cacheRtl : cacheLtr}>
            <ThemeProvider theme={themeWithDirection}>
              <CssBaseline enableColorScheme />
              <RootStoreProvider>{children}</RootStoreProvider>
            </ThemeProvider>
          </CacheProvider>
        </AppRouterCacheProvider>
      </QueryClientProvider>
    </DirectionContext.Provider>
  )
}
