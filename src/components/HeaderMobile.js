import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useRouter } from "next/router";
import { Bounded } from "./Bounded";
import { useState } from "react";
import { PrismicRichText } from "./PrismicRichText";

export function Header({ navigation, settings }) {
 const router = useRouter();
/*  if(router.query.uid === undefined){
   console.log("made it here")
   router.query = {uid: "Narrative"}
 }
  */
 const slug  = router.query.uid;

let colors ={}
console.log(router.asPath)
if(router.asPath === "/"){
  colors = {title:"white", subtitle:"gray-200",menuSel:"gray-300",menu:"gray-50"}
} else {
  colors = {
    title: "black",
    subtitle: "gray-700",
    menuSel: "gray-600",
    menu: "gray-300",
  };
}
const richtext = {
  a: ({children}) => <h1 className="text-5xl">{children}</h1>,
  paragraph: ({ children }) => <p className={`text-${colors.subtitle} font-light text-body`}>{children}</p>,
};


  return (
    <header
      className={`${
        router.asPath === "/" ? "absolute" : "relative"
      } z-[10] w-full grid justify-center`}
    >
      <div className=" top-0 py-6 grid justify-items-center mx-auto justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink
          href="/"
          className={`text-size1 text-${colors.title} font-normal font-infant tracking-wide flex gap-2 items-center`}
        >
          <PrismicText field={settings.data.siteTitle} />
        </PrismicNextLink>
        <PrismicRichText field={settings.data.subtitel} components={richtext} />
        <nav>
          <ul className="flex flex-wrap py-2">
            {navigation.data?.links.map((item, index) => (
              <>
                {item.link.uid === "forside" ? null : (
                  <li
                    key={prismic.asText(item.label)}
                    className={`font-semibold duration-200 tracking-normal text-size5 hover:text-${
                      colors.menuSel
                    } text-center flex items-center ${
                      slug?.toLowerCase() ==
                      prismic.asText(item.label).toLowerCase()
                        ? `text-${colors.menuSel}`
                        : `text-${colors.menu}`
                    }`}
                  >
                    {index === 1 ? null : (
                      <hr className="h-[35px] w-[1px] border-r border-gray-600 mx-2" />
                    )}
                    <PrismicNextLink field={item.link}>
                      <PrismicText field={item.label} />
                    </PrismicNextLink>
                  </li>
                )}
              </>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}


