import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalProvider } from 'contexts/GlobalContext'

import GlobalStyle from 'utils/styles/globals'
import theme from 'utils/styles/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
