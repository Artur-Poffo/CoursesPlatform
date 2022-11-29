import GlobalsStyles from '../styles/globals'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../contexts/Auth/AuthContext'

import NavBar from '../components/NavBar'
import MobileMenu from '../components/MobileMenu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <MobileMenu />
        <Component {...pageProps} />
        <GlobalsStyles />
      </AuthProvider>
    </>
  )
}
