import { IJeneseiTheme } from '.'

export const JeneseiTheme: IJeneseiTheme = {
  colors: {
    white: {
      100: '#ffffffff',
      80: '#ffffffcc',
      60: '#ffffff99',
      50: '#ffffff80',
      40: '#ffffff66',
      10: '#ffffff1a',
      5: '#ffffff0d',
    },
    black: {
      100: '#000000ff',
      80: '#000000cc',
      60: '#00000099',
      50: '#00000080',
      40: '#00000066',
      10: '#0000001a',
      5: '#0000000d',
    },
    product: {
      100: '#4195d2ff',
      20: '#4195d21a',
    },
    success: {
      100: '#34a853ff',
      10: '#34a8531a',
    },
    danger: {
      100: '#ff4141ff',
      10: '#ff41411a',
    },
    gray: {
      f2f2f7: '#f2f2f7ff',
      e5e5ea: '#e5e5eaff',
      c7c7cc: '#c7c7ccff',
      d1d1d6: '#d1d1d6ff',
      484848: '#484848ff',
      737373: '#737373ff',
      d3d3d3: '#d3d3d3ff',
      fafafa: '#fafafaff',
    },
  },
  sizes: {
    header: { width: '0px' },
    container: { width: '0px' },
    footer: { width: '0px' },
    modal: { width: '0px' },
    menu: { width: '0px' },
  },
  screens: {
    mobile: { width: '850px' },
    tablet: { width: '1024px' },
    menu: { width: '1450px' },
    modal: { width: '0px' },
    desktop: { width: '2560px' },
  },
  backgrounds: {
    volumetric: {
      wrapper: 'linear-gradient(180deg, #E9E9E9 0%, #E9E9E9 0.01%, #FFF 100%)',
      default: 'linear-gradient(180deg, #F4F4F4 0%, #FEFEFE 100%)',
      active: 'linear-gradient(180deg, #EAEAEA 0%, #F4F4F4 100%)',
    },
  },
  effects: {
    playstation: {
      default:
        '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    volumetric: {
      wrapper: '0px 0px 4px 0px rgba(0, 0, 0, 0.05) inset',
      active: '0px 0px 0.8px 0.6px rgba(0, 0, 0, 0.25)',
      default: '0px 0px 2px 1px rgba(0, 0, 0, 0.1)',
    },
    input: {
      default: '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset',
    },
    header: {
      wrapper: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
      menu: '0px -3px 4px 0px rgba(0, 0, 0, 0.25) inset',
    },
  },
}
