import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Massage Fluke - Bowen and Thai Massage" />
          <link
            rel="stylesheet"
            href="//cdn.quilljs.com/1.2.6/quill.snow.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Red+Hat+Text:400,700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Quando&display=swap"
            rel="stylesheet"
          ></link>

          <title>Massage Fluke</title>
          <link rel="icon" href="/favicon.png" />
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
