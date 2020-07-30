import * as React from 'react'
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

import { Text as NText } from '../../../atomic/atoms/Text'
import styled from 'styled-components/native'
import { assignTestId } from '../../../utils'

const Container = styled.TouchableOpacity`
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
`

const Background = styled.ImageBackground`
  flex: 1;
  overflow: hidden;
  justify-content: flex-end;
`

const Overlay = styled.View`
  flex: 0.5;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`

const Text = styled(NText)`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
`

export interface ISmallCardProps extends TouchableOpacityProps {
  testID?: string
  text?: string
  image: ImageSourcePropType
  gradient?: boolean
  onPress?: () => void
  width?: number
  height?: number
}

export const SmallCard: React.FC<ISmallCardProps> = ({
  testID = 'SmallCard',
  text,
  image,
  gradient,
  width = 120,
  height = 126,
  ...props
}): JSX.Element => {
  return (
    <Container {...assignTestId('TouchableOpacity', testID)} {...props} style={{ width, height }}>
      <Background source={image}>
        {gradient ? (
          <Overlay>
            <Text testID={testID}>{text}</Text>
          </Overlay>
        ) : (
          <Text testID={testID}>{text}</Text>
        )}
      </Background>
    </Container>
  )
}
