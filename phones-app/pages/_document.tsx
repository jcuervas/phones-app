import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from "react";
import HeaderComponent from "components/shared/HeaderComponent";
import BreadcrumbsComponent from "components/shared/BreadcrumbsComponent";

class PhoneDocument extends Document {

  render() {

    return (
      <Html>
        <Head>
          <meta name="description" content="phones app just for technical skills test"/>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Shizuru&display=swap"
                rel="stylesheet"/>
        </Head>
        <body>
        <HeaderComponent/>
        {BreadcrumbsComponent}
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default PhoneDocument
