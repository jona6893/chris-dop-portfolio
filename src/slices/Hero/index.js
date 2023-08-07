import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


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
const ReactPlayer = dynamic(() => import("react-player/vimeo"), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});
const Hero = ({ slice }) => {
  // State to control when the video should load
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const backgroundImage = slice.primary.backgroundImage;

  setTimeout(()=> {
    const playerWrapper = document.querySelector(".player-wrapper");
    const heroSection = document.querySelector(".heroSection");
    if (playerWrapper) {
      playerWrapper.style.height = window.innerHeight + "px";
       heroSection.style.height = window.innerHeight + "px";
    }
  },0)



useEffect(() => {
  if (typeof window !== "undefined") {
    const handleResize = () => {
      const playerWrapper = document.querySelector(".player-wrapper");
      const heroSection = document.querySelector(".heroSection");
      if (playerWrapper) {
        playerWrapper.style.height = window.innerHeight + "px";
        heroSection.style.height = window.innerHeight + "px";
      }
    };

    window.addEventListener("resize", handleResize);

    // Handle initial setting (if required)
    handleResize();

    return () => {
      // Cleanup
      window.removeEventListener("resize", handleResize);
    };
  }
}, []);

  

  return (
    <section className="relative bgblack text-white h-screen grid items-end overflow-hidden heroSection">
      {slice.variation === "heroWithVideo" ? (
        <>
          {shouldLoadVideo ? (
            <div className="player-wrapper h-screen w-screen">
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
          ) : (
            <PrismicNextImage
              field={slice.primary.placeholder}
              alt=""
              fill={true}
              className="pointer-events-none select-none object-cover opacity-60"
              onLoad={() => setShouldLoadVideo(true)} // Once the image loads, load the video.
            />
          )}
        </>
      ) : (
        prismic.isFilled.image(backgroundImage) && (
          <PrismicNextImage
            field={backgroundImage}
            alt=""
            fill={true}
            className="pointer-events-none select-none object-cover opacity-60"
          />
        )
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
                <PrismicNextLink
                  field={item.iconlink}
                  aria-label="Social Media Link"
                >
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
