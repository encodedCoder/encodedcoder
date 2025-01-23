import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/Footer.css";
import "../styles/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
