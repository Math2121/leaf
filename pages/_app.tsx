import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Modal from 'react-modal';
function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
