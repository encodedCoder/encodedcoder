// filepath: /C:/Users/theCode/OneDrive/Desktop/portfolio-website/src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="description"
            content="Hi, I'm Suresh, a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy working on both front-end and back-end technologies."
          />
          <meta
            name="keywords"
            content="Suresh, encodedCoder, web developer, game developer, portfolio, programmer, coder"
          />
          <meta name="author" content="Suresh" />
          <meta property="og:title" content="encodedCoder · Suresh" />
          <meta
            property="og:description"
            content="Hi, I'm Suresh, a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy working on both front-end and back-end technologies."
          />
          <meta property="og:url" content="http://encodedcoder.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://encodedcoder.com/images/suresh.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="coderEncoded · Suresh" />
          <meta
            name="twitter:description"
            content="Hi, I'm Suresh, a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy working on both front-end and back-end technologies."
          />
          <meta
            name="twitter:image"
            content="https://encodedcoder.com/images/suresh.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
