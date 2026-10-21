'use client'
import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MaterialUILink from '@mui/material/Link'
import NextLink from '@/components/Link'
import ProTip from '@/components/ProTip'
import Copyright from '@/components/Copyright'
import { observer } from 'mobx-react-lite'
import ModeToggle from '@/components/ModeToggle'
import { DirectionContext } from '@/providers/AppProviders'
import { useGlobalStore } from '@/providers/RootStoreProvider'
import Button from '@mui/material/Button'

const Home: React.FC = () => {
  const _globalStore = useGlobalStore()
  const { direction, toggleDirection } = React.useContext(DirectionContext)

  return (
    <Container maxWidth="lg">
      <Stack
        direction="column"
        sx={{ marginBlock: 4, justifyContent: 'center', alignItems: 'center' }}
      >
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <ModeToggle />
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button
              variant={direction === 'ltr' ? 'contained' : 'outlined'}
              onClick={() => toggleDirection('ltr')}
            >
              Left to right
            </Button>
            <Button
              variant={direction === 'rtl' ? 'contained' : 'outlined'}
              onClick={() => toggleDirection('rtl')}
            >
              Right to left
            </Button>
          </Stack>
        </Stack>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="body1" component="p" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Typography variant="body2" component="small" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScript
        </Typography>
        <MaterialUILink component={NextLink} href="/about" color="secondary">
          Go to the about page
        </MaterialUILink>

        <ProTip />
        <Copyright />
      </Stack>
    </Container>
  )
}

export default observer(Home)
