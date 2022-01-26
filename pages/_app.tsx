import '../styles/globals.css';
import type { AppProps } from 'next/app';

const unused = 1;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
