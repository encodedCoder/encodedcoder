import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/Footer.css";
import "../styles/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="header fixed top-0 w-full z-50">
        {/* Your header content here */}
      </header>
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
