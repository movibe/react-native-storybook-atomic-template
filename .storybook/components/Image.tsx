import * as React from 'react'
import styled from 'styled-components/native'

import image from '../../src/assets/images/logo.svg'

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: '50%';
  height: 150px;
  margin-bottom: 40px;
  align-content: self;
`
export const Logo: React.FC = () => <Image source={image} />
