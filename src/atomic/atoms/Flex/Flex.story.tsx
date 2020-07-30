import * as React from 'react'
import { Text } from 'react-native'

import { Row } from '../../../atomic/atoms/Flex'

export default {
  title: 'Atoms/Flex',
}

export const normal = () => (
  <Row>
    <Text testID='title'>Teste de linha</Text>
  </Row>
)
