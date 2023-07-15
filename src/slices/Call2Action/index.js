import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.Call2ActionSlice} Call2ActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Call2ActionSlice>} Call2ActionProps
 * @param {Call2ActionProps}
 */



const richText = {
  heading2: ({ node, children }) => <h2 className="text-5xl text-white">{children}</h2>,
  paragraph: ({ children }) => <p className="text-white">{children}</p>,
};



const Call2Action = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-h-[500px] mx-auto"
    >
      <div className="grid">
        <div className="col-start-1	row-start-1	z-[1] w-full h-full flex justify-center items-center ">
          <div className="text-center bg-black/50 rounded p-4 grid gap-4 justify-items-center">
            <PrismicRichText
              field={slice.primary.title}
              components={richText}
            />
            <PrismicRichText
              field={slice.primary.tagline}
              components={richText}
            />
            <PrismicNextLink
              field={slice.primary.button}
              className="bg-blue-400 py-2 px-4 rounded text-white w-fit"
            >
              Button
            </PrismicNextLink>
          </div>
        </div>
        <PrismicNextImage
          field={slice.primary.background}
          fill={false}
          className="col-start-1 row-start-1 max-h-[500px] object-cover "
        />
      </div>
    </section>
  );
};

export default Call2Action;
