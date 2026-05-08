'use client'
import * as React from 'react'
import { Container, Stack, Heading, Text, Link, Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import ProTip from '@/components/ProTip'
import Copyright from '@/components/Copyright'
import RootStore from '@/stores/RootStore'
import { inject, observer } from 'mobx-react'
import GlobalStore from '@/stores/global.store'
import { ColorModeButton } from '@/components/ui/color-mode'

interface HomeProps {
  globalStore: GlobalStore
}

const Home: React.FC<HomeProps> = () => {
  const [direction, setDirection] = React.useState<'ltr' | 'rtl'>('ltr')

  React.useEffect(() => {
    document.dir = direction
  }, [direction])

  return (
    <Container maxW="4xl">
      <Stack
        direction="column"
        my={4}
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="row" gap={2} mb={2}>
          <ColorModeButton />
          <Stack direction="row" gap={1} alignItems="center">
            <Button
              variant={direction === 'ltr' ? 'solid' : 'outline'}
              onClick={() => setDirection('ltr')}
            >
              Left to right
            </Button>
            <Button
              variant={direction === 'rtl' ? 'solid' : 'outline'}
              onClick={() => setDirection('rtl')}
            >
              Right to left
            </Button>
          </Stack>
        </Stack>
        <Heading as="h1" size="xl" mb={2}>
          Chakra UI - Next.js example in TypeScript
        </Heading>
        <Text mb={2}>
          Chakra UI - Next.js example in TypeScript
        </Text>
        <Text fontSize="sm" mb={2}>
          Chakra UI - Next.js example in TypeScript
        </Text>
        <Link asChild color="teal.500">
          <NextLink href="/">
            Go to the home page
          </NextLink>
        </Link>

        <ProTip />
        <Copyright />
      </Stack>
    </Container>
  )
}

export default inject(({ store }: { store: RootStore }) => ({
  globalStore: store?.globalStore,
}))(observer(Home))
