import { getStatusBarHeight } from 'react-native-status-bar-height'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

import { Column, Row } from '../../../atomic/atoms/Flex'
import { Image } from '../../../atomic/atoms/Image'
import { Text } from '../../../atomic/atoms/Text'

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.text.default.color};
`

export const SubTitle = styled(Text)`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.text.default.color};
  padding-left: 5px;
`

export const Logo = styled(Image).attrs({
  resizeMode: 'contain',
})`
  width: 64px;
  height: 18px;
`

export const Container = styled(Column)`
  height: ${getStatusBarHeight()}px;
`
export const ContainerTop = styled(Row)`
  height: 30px;
`

export const ContainerSubtitle = styled(Row)`
  padding-top: 10px;
  height: 50px;
`

export const Left = styled.View`
  flex: 1;
  width: 20px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
`
export const Right = styled.View`
  flex: 1;
  width: 20px;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
`

export const Body = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const ArrowBackIcon = styled(Icon).attrs({ name: 'left' })`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main};
`
export const FilterIcon = styled(Icon2).attrs({ name: 'filter-list' })`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.main};
`
