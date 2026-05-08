import * as React from 'react'
import { Text, Link } from '@chakra-ui/react'

export default function Copyright() {
  return (
    <Text
      fontSize="sm"
      textAlign="center"
      color="fg.muted"
    >
      {'Copyright © '}
      <Link color="inherit" href="https://chakra-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Text>
  )
}
