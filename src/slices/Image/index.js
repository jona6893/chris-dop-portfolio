import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <section
     /*  as="section" */
      className={/* clsx("bg-white", index === 0 && "pt-0 md:pt-0") */ ` p-4`}
    >
      {prismic.isFilled.image(image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={image} sizes="100vw" alt="" className="w-full" />
        </div>
      )}
    </section>
  );
};

export default Image;
