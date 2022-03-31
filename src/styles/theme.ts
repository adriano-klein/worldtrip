import { extendTheme } from '@chakra-ui/react';

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
  }
})