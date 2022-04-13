import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const breakpoints = {
  sm: '635px',
  md: '990px',
  lg: '1300px',
  xl: '1800px',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false

}

const theme = extendTheme({
  colors: {
    gray: {
      "50": '#F5F8FA',
      "600":'#47585B',
    },
    yellow: {
      "400":'#FFBA08',
    },
  },
  fonts: {
    headings: 'poppins',
    body: 'poppins',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#021627' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.500',
        maxWidth: '1440px',
        margin: '0 auto'
      }
    })
  },
  config,
  breakpoints
})

export default theme