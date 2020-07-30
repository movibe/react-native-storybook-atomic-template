import * as React from 'react'
import styled from 'styled-components/native'

const Heading = styled.Text``

interface IProps {
  heading: string
}
const Container = styled.View``

const Content = styled.Text``

export const Teaser: React.FC<IProps> = ({ heading, children }) => (
  <Container>
    <Heading>{heading}</Heading>
    <Content>{children}</Content>
  </Container>
)
