import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  space: [0, 4, 8, 16, 32, 64],
  breakpoints: ['40em', '52em', '64em'],
}

class MyDocument extends Document {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <Html>
        <Head>
        <meta id="metaViewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      </ThemeProvider>
    )
  }
}

export default MyDocument