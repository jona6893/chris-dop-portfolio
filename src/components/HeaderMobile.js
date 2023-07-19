import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import { PrismicRichText } from "./PrismicRichText";
import { motion, AnimatePresence } from "framer-motion";

export function HeaderMobile({ navigation, settings, bgColor, textColor, slug, path }) {
  const [toggleMenu, setToggleMenu] = useState(false);



  const richtext = {
    a: ({ children }) => <h1 className="text-5xl">{children}</h1>,
    paragraph: ({ children }) => (
      <p
        className={`duration-100 ${
          toggleMenu === true ? `text-${textColor}` : `text-${bgColor}`
        } font-light text-body`}
      >
        {children}
      </p>
    ),
  };

  return (
    <header
      className={`${
        path === "/" ? "absolute" : "relative"
      } z-[10] w-full grid justify-center`}
    >
      <div className="top-0 py-6 px-4 w-screen flex justify-items-center mx-auto justify-between gap-x-6 gap-y-3 leading-none">
        <div className={`z-10`}>
          <PrismicNextLink
            onClick={() => setToggleMenu(false)}
            href="/"
            className={`text-size1 duration-100 ${
              toggleMenu === true ? `text-${textColor}` : `text-${bgColor}`
            } font-normal font-infant tracking-wide gap-2 items-center`}
          >
            <PrismicText field={settings.data.siteTitle} />
            <PrismicRichText
              field={settings.data.subtitel}
              components={richtext}
            />
          </PrismicNextLink>
        </div>
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className={`z-[2] duration-100  w-[35px] flex flex-col relative ${
            toggleMenu === true ? "h-[35px]" : "h-[35px]"
          }`}
        >
          <div
            className={`duration-100 absolute top-[10px] ${
              toggleMenu === true ? "rotate-45 top-[17.5px]" : "rotate-0"
            } w-full h-[1px] ${
              toggleMenu === true ? `bg-${textColor}` : `bg-${bgColor}`
            } absolute `}
          />

          <div
            className={`duration-100 absolute bottom-[10px] ${
              toggleMenu === true ? "rotate-[-45deg] top-[17.5px]" : "rotate-0"
            } w-full h-[1px] ${
              toggleMenu === true ? `bg-${textColor}` : `bg-${bgColor}`
            }`}
          />
        </button>
        <AnimatePresence>
          {toggleMenu === true && (
            <motion.nav
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: toggleMenu ? 1 : 0,
                y: toggleMenu ? 0 : 0,
              }}
              transition={{ duration: 0.1 }}
              style={{ visibility: toggleMenu ? "visible" : "hidden" }}
              className={`absolute grid justify-items-center items-center inset-0 w-screen h-screen bg-${bgColor}`}
            >
              <motion.ul
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                transition={{ duration: 0.2 }}
                id="MobileText"
                className={`flex flex-col gap-8 h-full relative items-center justify-center`}
              >
                {navigation.data?.links.map((item, index) => (
                  <>
                    {item.link.uid === "forside" ? null : (
                      <li
                        key={prismic.asText(item.label)}
                        className={`font-normal duration-200 tracking-normal hover:text-${textColor} text-center flex flex-col items-center`}
                      >
                        <PrismicNextLink
                          onClick={() => setToggleMenu(!toggleMenu)}
                          field={item.link}
                          className={`${
                            slug?.toLowerCase() ==
                            prismic.asText(item.label).toLowerCase()
                              ? `text-${textColor}`
                              : `text-${textColor}`
                          } ${path === item.link.url && "underline"} underline-offset-8 decoration-1 text-size4`}
                        >
                          <PrismicText field={item.label} />
                        </PrismicNextLink>
                      </li>
                    )}
                  </>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

