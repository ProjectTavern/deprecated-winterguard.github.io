
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'

import { RemoteMenu } from '@/components/organizations'
import Main from '@/layouts/Main'
import Footer from '@/layouts/Footer'

import { indexCards } from '../store/dummydata';
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <RemoteMenu indexCards={indexCards} />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
