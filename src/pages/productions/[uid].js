import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { PrismicRichText } from "@/components/PrismicRichText";

function Production({ navigation, settings, production }) {
 
const title = {
  heading2: ({ children }) => (
    <h2 className="text-2xl text-black">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-base text-gray-600">{children}</h3>
  ),
};

  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>
          {prismic.asText(production.data.title)} |{" "}
          {prismic.asText(settings.data.siteTitle)}
        </title>
      </Head>
      <div className="grid gap-4 justify-items-center pt-4 pb-8 px-2 font-semibold">
        <PrismicRichText field={production.data.title} components={title} />
        <div className="text-center px-2">
          <PrismicRichText field={production.data.year} components={title} />
          <PrismicRichText field={production.data.type} components={title} />
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto">
        <SliceZone slices={production.data.slices} components={components} />
      </div>
      <div className="flex gap-1 justify-center mt-10 px-2">
        <p>Director:</p>
        <PrismicRichText field={production.data.director} components={title} />
      </div>
      <div className="flex gap-1 justify-center mb-20 px-2">
        <p>Producer:</p>
        <PrismicRichText field={production.data.producer} components={title} />
      </div>
    </Layout>
  );
}

export default Production;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  try {
    const production = await client.getByUID("productions", params.uid, {
      lang: locale,
    });
    const navigation = await client.getSingle("navigation", { lang: locale });
    const settings = await client.getSingle("settings", { lang: locale });

    return {
      props: {
        navigation,
        settings,
        production,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: {} };
  }
}

export async function getStaticPaths() {
  const client = createClient();

  const productions = await client.getAllByType("productions", { lang: "*" });

  return {
    paths: productions.map((productions) => {
      return {
        params: { uid: productions.uid },
        locale: productions.lang,
      };
    }),
    fallback: false,
  };
}
