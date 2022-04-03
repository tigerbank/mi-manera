import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1215px',
    '2xl': '1536px',
  });

  const theme = extendTheme({
    breakpoints,
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
