'use client'
import { useColorScheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useEffect, useState } from 'react'

export default function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render nothing on server to avoid hydration mismatch
    return null
  }

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ p: 2, justifyContent: 'center', alignItems: 'center' }}
    >
      <Button
        variant={mode === 'system' ? 'contained' : 'outlined'}
        onClick={() => setMode('system')}
      >
        System
      </Button>
      <Button
        variant={mode === 'light' ? 'contained' : 'outlined'}
        onClick={() => setMode('light')}
      >
        Light
      </Button>
      <Button
        variant={mode === 'dark' ? 'contained' : 'outlined'}
        onClick={() => setMode('dark')}
      >
        Dark
      </Button>
    </Stack>
  )
}
