import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0 text-red-500">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 mt-12 first:mt-0 max-lg:px-4">
      {children}
    </p>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section className="relative bg-slate-900 text-white h-screen grid items-end ">
      {prismic.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-60"
        />
      )}
      <div className="relative mb-[15vh]">
        <div className="flex flex-col flex-col-reverse items-center justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          <div className="">
            {prismic.isFilled.link(slice.primary.buttonLink) && (
              <PrismicNextLink
                field={slice.primary.buttonLink}
                className="rounded-lg backdrop-blur-md duration-200 px-6 py-1 font-bold text-size5 border-2 font-zen text-white hover:border-yellow-500 hover:text-yellow-500 hover:bg-white/20"
              >
                {slice.primary.buttonText || "IMDB"}
              </PrismicNextLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
