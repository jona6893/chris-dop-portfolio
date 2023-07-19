import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useRouter } from "next/router";
import { Bounded } from "./Bounded";
import { useState } from "react";
import { PrismicRichText } from "./PrismicRichText";

export function Header({ navigation, settings }) {
 const router = useRouter();
 const slug  = router.query.uid;

let colors ={}
console.log(router.asPath)
if(router.asPath === "/"){
  colors = {title:"white", subtitle:"white",menuSel:"gray-100",menu:"white"}
} else {
  colors = {
    title: "black",
    subtitle: "black",
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
                    className={`font-normal duration-200 tracking-normal uppercase text-size5 hover:text-${colors.menuSel} text-center flex items-center`}
                  >
                    {index === 0 ? null : (
                      <hr className={`h-[35px] w-[1px] border-r ${router.asPath === "/" ? "border-gray-400" :"border-gray-500"} mx-4`} />
                    )}
                    <PrismicNextLink
                      field={item.link}
                      className={`${
                        slug?.toLowerCase() ==
                        prismic.asText(item.label).toLowerCase()
                          ? `text-${colors.menuSel}`
                          : `text-${colors.menu}`
                      }`}
                    >
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


