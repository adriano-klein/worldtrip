import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '635px',
  md: '990px',
  lg: '1300px',
  xl: '1800px',
}

export const theme = extendTheme({
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
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500',
        maxWidth: '1440px',
        margin: '0 auto'
      }
    }
  },
  breakpoints
})

