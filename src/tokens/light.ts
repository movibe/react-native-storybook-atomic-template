import { DefaultTheme } from 'styled-components/native'

export const lightTheme: DefaultTheme = {
  borderRadius: '10px',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',

  text: {
    font: {
      bold: 'SFProText-Bold',
      light: 'SFProText-Light',
      regular: 'SFProText-Regular',
      medium: 'SFProText-Medium',
    },
    default: {
      color: '#444',
      size: '12px',
    },
    small: {
      color: '#999',
      size: '#000',
    },
    h1: {
      color: '#000',
      size: '#000',
    },
    h2: {
      color: '#000',
      size: '#000',
    },
  },

  colors: {
    background: '#fff',
    text: '#000',
    main: '#F1618C',
    secondary: '#F1618C',
    dark: '#333',
    white: '#fff',
    disabled: '#f1f1f1',
    border: '#dadada',
    google: '#d34836',
    facebook: '#2f5199',
  },
}
