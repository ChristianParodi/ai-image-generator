'use client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import theme from './theme';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  )
}
