import GlobalsStyles from '../styles/globals'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/Auth/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalsStyles />
      </AuthProvider>
    </>
  )
}
