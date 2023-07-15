import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useRouter } from "next/router";
import { Bounded } from "./Bounded";
import { useState } from "react";
import { PrismicRichText } from "./PrismicRichText";

export function Header({ navigation, settings }) {
 const router = useRouter();
 if(router.query.uid === undefined){
   console.log("made it here")
   router.query = {uid: "Narrative"}

 }
 const slug  = router.query.uid;

const richtext = {
  a: ({children}) => <h1 className="text-5xl">{children}</h1>,
  paragraph: ({ children }) => <p className="text-gray-400 font-bold text-base">{children}</p>,
};


  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className="text-2xl font-semibold tracking-tight flex gap-2 items-center"
        >
          <PrismicText field={settings.data.siteTitle} />
          <PrismicRichText
            field={settings.data.subtitel}
            components={richtext}
          />
        </PrismicNextLink>
        <nav>
          <ul className="flex flex-wrap gap-2 md:gap-4">
            {navigation.data?.links.map((item, index) => (
              <li
                key={prismic.asText(item.label)}
                className={`font-light tracking-tight text-[15px] ${
                  slug?.toLowerCase() ==
                  prismic.asText(item.label).toLowerCase()
                    ? "text-slate-800"
                    : "text-gray-300"
                }`}
              >
                <PrismicNextLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
