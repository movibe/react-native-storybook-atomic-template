import LottieView from 'lottie-react-native'
import * as React from 'react'
import styled from 'styled-components/native'

import loadingImg from '../../../assets/anim/loader-color.json'
import { assignTestId } from '../../../utils'

interface ContainerProps {
  alignSelf: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'auto'
}

const Container = styled(LottieView)<ContainerProps>`
  align-self: ${(props) => props.alignSelf};
  flex: 1;
`
const ContainerLoader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export interface ILoadingProps {
  testID?: string
  autoPlay?: boolean
  loop?: boolean
  speed?: number
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'auto'
  size?: number | 'small' | 'large'
}

export const Loading: React.FC<ILoadingProps> = ({
  testID = 'Loading',
  alignSelf = 'center',
  autoPlay = true,
  loop = true,
  speed = 1.5,
  size,
  ...props
}): JSX.Element => {
  let style
  switch (size) {
    case 'small':
      style = { width: 25, height: 25 }
      break

    case 'large':
      style = { width: 50, height: 50 }
      break

    default:
      style = {}
  }

  return (
    <ContainerLoader {...assignTestId('View', testID)}>
      <Container alignSelf={alignSelf || 'auto'} source={loadingImg} autoPlay={autoPlay} loop={loop} speed={speed} style={style} {...props} />
    </ContainerLoader>
  )
}
