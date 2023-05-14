import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

const App: React.FC<AppProps> =({ Component, pageProps }) => {
  return (
    <MantineProvider theme={{colorScheme: 'dark'}}>
      <Component {...pageProps} />)
    </MantineProvider>
  )
}

export default App
