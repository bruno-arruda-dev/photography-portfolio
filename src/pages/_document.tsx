import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>

        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Mooli&family=Poppins&display=swap" rel="stylesheet" />

      </Head>
      <body className='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}