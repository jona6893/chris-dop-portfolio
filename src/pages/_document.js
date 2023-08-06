import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="developer-note"
          content="This Website was built by Jonathan Weldon.
    If you're interested in having a website built, contact me at jona.weldon@icloud.com or visit weldon.dk"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/*   
      <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/heavitas"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
