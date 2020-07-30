import * as React from 'react'
import { FlexAlignType, ScrollView, StyleProp, TouchableOpacity, View, ViewProps, ViewStyle } from 'react-native'

import { assignTestId } from '../../../utils'

export interface IFlexProps extends ViewProps {
  testID?: string
  reverse?: boolean
  disabled?: boolean
  alignItems?: FlexAlignType
  border?: number
  borderColor?: string
  flex?: number
  onPress?: () => void
  padding?: number
  scroll?: boolean
  content?: boolean
  paddingHorizontal?: number
  paddingVertical?: number
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
}

export const Row: React.FC<IFlexProps> = (props) => {
  const {
    reverse,
    alignItems,
    justifyContent,
    style,
    children,
    flex,
    onPress,
    border = 0,
    borderColor,
    padding,
    scroll,
    content,
    disabled,
    testID = 'View',
    ...rest
  } = props
  const direction = reverse ? 'row-reverse' : 'row'
  const _style: StyleProp<ViewStyle> = [
    {
      padding: content ? 10 : padding,
      flexDirection: direction,
      alignItems,
      justifyContent,
      flex,
      borderWidth: border,
      borderColor,
    },
    style,
  ]

  if (onPress) {
    return (
      <TouchableOpacity {...assignTestId('TouchableOpacity', testID)} style={_style} onPress={onPress} disabled={disabled} {...rest}>
        {children}
      </TouchableOpacity>
    )
  }
  if (scroll) {
    return (
      <ScrollView {...assignTestId('ScrollView', testID)} style={_style} {...rest}>
        {children}
      </ScrollView>
    )
  }
  return (
    <View {...assignTestId('View', testID)} style={_style} {...rest}>
      {children}
    </View>
  )
}

export const Column: React.FC<IFlexProps> = (props) => {
  const {
    reverse,
    alignItems,
    justifyContent,
    disabled,
    style,
    children,
    flex,
    onPress,
    content,
    scroll,
    border = 0,
    borderColor,
    padding = 0,
    testID = 'View',
    ...rest
  } = props
  const direction = reverse ? 'column-reverse' : 'column'
  const _style: StyleProp<ViewStyle> = [
    style,
    {
      padding: content ? 10 : padding,
      flexDirection: direction,
      alignItems,
      justifyContent,
      flex,
      borderWidth: border,
      borderColor,
    },
  ]

  if (onPress) {
    return (
      <TouchableOpacity {...assignTestId('TouchableOpacity', testID)} style={_style} onPress={onPress} disabled={disabled} {...rest}>
        {children}
      </TouchableOpacity>
    )
  }
  if (scroll) {
    return (
      <ScrollView {...assignTestId('ScrollView', testID)} style={_style} {...rest}>
        {children}
      </ScrollView>
    )
  }
  return (
    <View {...assignTestId('View', testID)} style={_style} {...rest}>
      {children}
    </View>
  )
}
