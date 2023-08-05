import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";


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

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});
const Hero = ({ slice }) => {


  
console.log(slice)
  const backgroundImage = slice.primary.backgroundImage;


  return (
    <section className="relative bgblack text-white h-screen grid items-end ">
      {slice.variation === "heroWithVideo" && (
        <div className="player-wrapper">
          <ReactPlayer
            url={slice?.primary?.videourl?.url}
            className="plyr absolute top-0 left-0 pointer-events-none select-none opacity-60"
            width="100%"
            height="100%"
            playing
            playsinline
            loop
            muted
            volume={0}
          />
        </div>
      )}
      {prismic.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-60"
        />
      )}

      <div className="absolute bottom-0 mb-[8vh] w-full">
        <div className="flex flex-col flex-col-reverse items-center justify-items-center gap-8">
          <div className="max-w-2xl text-center">
            <PrismicRichText
              field={slice.primary.text}
              components={components}
            />
          </div>
          <div className="flex gap-4 items-center">
            {slice.items.map((item) => (
              <div key={nanoid()}>
                <PrismicNextLink field={item.iconlink}>
                  <PrismicNextImage
                    field={item.icon}
                    className="invert w-8"
                    alt=""
                  />
                </PrismicNextLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
