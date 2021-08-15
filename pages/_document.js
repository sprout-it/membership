import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  render() {
    return (
      <Html >
        {/* <Head>Sprout Story</Head> */}
        <Head>
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.22.0/antd.min.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}