import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html style={{ scrollBehavior: `smooth` }}>
        <Head>
          <meta
            name="google-site-verification"
            content="CFrld2suc4I75ulSf93990rtPgq3jkQvqbA_byMyNMI"
          />
        </Head>
        <body className="bg-light2 dark:bg-dark2">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
