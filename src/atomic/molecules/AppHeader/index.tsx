import * as React from 'react'
import { TouchableOpacity } from 'react-native'

import logoImage from '../../../assets/images/logo.svg'
import { Column } from '../../../atomic/atoms/Flex'
import { assignTestId } from '../../../utils'
import * as S from './styles'

export interface IAppHeaderProps {
  testID?: string
  title?: string
  subtitle?: string
  logo?: boolean
  onBack?: () => void
  onFilter?: () => void
}

export const AppHeader: React.FC<IAppHeaderProps> = ({ testID = 'AppHeader', title, subtitle, logo, onBack, onFilter }): JSX.Element => {
  return (
    <S.Container testID={testID}>
      <S.ContainerTop alignItems='center'>
        <S.Left>
          {onBack && (
            <TouchableOpacity onPress={onBack} {...assignTestId('TouchableOpacity', `${testID}_onBack`)}>
              <S.ArrowBackIcon />
            </TouchableOpacity>
          )}
        </S.Left>
        <S.Body>
          {title && <S.Title testID={`${testID}_title`}>{title}</S.Title>}
          {logo && <S.Logo testID={`${testID}_logo`} source={logoImage} />}
        </S.Body>
        <S.Right></S.Right>
      </S.ContainerTop>
      {subtitle && (
        <S.ContainerSubtitle>
          <Column flex={8} justifyContent='center'>
            {subtitle && <S.SubTitle testID={`${testID}_subtitle`}>{subtitle}</S.SubTitle>}
          </Column>
          <Column flex={1} justifyContent='center' alignItems='flex-end'>
            {onFilter && (
              <TouchableOpacity onPress={onFilter} {...assignTestId('TouchableOpacity', `${testID}_onFilter`)}>
                <S.FilterIcon />
              </TouchableOpacity>
            )}
          </Column>
        </S.ContainerSubtitle>
      )}
    </S.Container>
  )
}
