'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from '@/components/ui/color-mode'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import RootStoreProvider from './RootStoreProvider'

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider>
          <RootStoreProvider>{children}</RootStoreProvider>
        </ColorModeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}
