// filepath: /C:/Users/theCode/OneDrive/Desktop/portfolio-website/src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* You can add custom meta tags, fonts, or other head elements here */}
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
          <link
            rel="icon"
            href="https://lh3.googleusercontent.com/a/ACg8ocJ1mp1jAEkN6ayGk2969OFuEO2zInuQyBiG-BFvfkxwe5G15KMu=s360-c-no"
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
