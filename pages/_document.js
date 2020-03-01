import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMo6Ueuw_-IAlPGLZoN8rSTaqlB6ysj7Y"
          ></script>
          <link
            href="https://fonts.googleapis.com/css?family=Red+Hat+Text:400,700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Quando&display=swap"
            rel="stylesheet"
          ></link>
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
