import { DefaultTheme } from 'styled-components/native'

export const darkTheme: DefaultTheme = {
  borderRadius: '5px',
  boxShadow: '5px 5px 5px rgba(0,0,0,0.5)',
  text: {
    font: {
      bold: 'SFProText-Bold',
      light: 'SFProText-Light',
      regular: 'SFProText-Regular',
      medium: 'SFProText-Medium',
    },
    default: {
      color: '#fff',
      size: '12px',
    },
    small: {
      color: '#ccc',
      size: '#000',
    },
    h1: {
      color: '#fff',
      size: '#000',
    },
    h2: {
      color: '#fff',
      size: '#000',
    },
  },

  colors: {
    background: '#000',
    text: '#fff',
    main: '#F1618C',
    secondary: '#F1618C',
    dark: '#333',
    white: '#000',
    disabled: '#ccc',
    border: '#dadada',
    google: '#d34836',
    facebook: '#2f5199',
  },
}
