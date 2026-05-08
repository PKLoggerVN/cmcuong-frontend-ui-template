import * as React from 'react'
import { Link, Text } from '@chakra-ui/react'
import { MdLightbulbOutline } from 'react-icons/md'

export default function ProTip() {
  return (
    <Text mt={6} mb={3} color="fg.muted" display="flex" alignItems="center" justifyContent="center">
      <MdLightbulbOutline style={{ marginRight: '8px' }} />
      Pro tip: See more{' '}
      <Link href="https://chakra-ui.com/docs/components" color="teal.500" mx={1}>
        components
      </Link>
      {' '}in the Chakra UI documentation.
    </Text>
  )
}
