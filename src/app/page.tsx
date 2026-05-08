import * as React from 'react'
import { Container, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Container
      maxW="4xl"
      display="flex"
      minH="50vh"
      alignItems="center"
      justifyContent="center"
    >
      <Button asChild variant="solid" size="lg">
        <NextLink href="/demo">Go to the demo page</NextLink>
      </Button>
    </Container>
  )
}
