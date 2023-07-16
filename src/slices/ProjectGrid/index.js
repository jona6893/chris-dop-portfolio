import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.ProjectGridSlice} ProjectGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectGridSlice>} ProjectGridProps
 * @param {ProjectGridProps}
 */

const ProjectGrid = ({ slice }) => {

const titleText = {
  paragraph: ({ children }) => (
    <p className="text-2xl text-white col-start-1 row-start-1 z-[1] uppercase">{children}</p>
  ),
};

const overlayColorToClass = {
  Red: "hover:bg-red-600/40",
  Orange: "hover:bg-orange-600/40",
  Amber: "hover:bg-amber-600/40",
  Yellow: "hover:bg-yellow-600/40",
  Lime: "hover:bg-lime-600/40",
  Green: "hover:bg-green-600/40",
  Emerald: "hover:bg-emerald-600/40",
  Teal: "hover:bg-teal-600/40",
  Cyan: "hover:bg-cyan-600/40",
  Sky: "hover:bg-sky-600/40",
  Blue: "hover:bg-blue-600/40",
  Indigo: "hover:bg-indigo-600/40",
  Violet: "hover:bg-violet-600/40",
  Purple: "hover:bg-purple-600/40",
  Fuchsia: "hover:bg-fuchsia-600/40",
  Pink: "hover:bg-pink-600/40",
  Rose: "hover:bg-rose-600/40",
  // add other mappings as necessary
};

  console.log(slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-2 gap-4 p-4 justify-items-center items-center"
    >
      {slice.items.map((item, index) => {
        return (
          <div
            key={index * 2}
            className="relative w-full pb-[46.2%] overflow-hidden m-auto"
          >
            <article className="grid absolute inset-0 justify-items-center items-center">
              <Image
                src={item.image.url}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
              <Link
                href={`productions/` + item.link.uid}
                className={`w-full h-full z-[1] grid justify-items-center items-center bg-gray-800/25 duration-300 ${
                  item.overlay_color
                    ? overlayColorToClass[item.overlay_color]
                    : ""
                }`}
              >
                <PrismicRichText field={item.title} components={titleText} />
              </Link>
            </article>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectGrid;
/*   <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-2 grid-rows-[300px_minmax(900px,_1fr)_100px] justify-items-center items-center"
    >
      {slice.items.map((item, index) => {
        return (
          <article key={index * 2} className="grid">
            <PrismicRichText field={item.title} components={titleText} />
            <Image
              src={item.image.url}
              alt="image"
              width={item.image.dimensions.width}
              height={item.image.dimensions.height}
              style={{ objectFit: "cover" }}
              className="col-start-1 row-start-1 overflow-hidden"
            />
          </article>
        );
      })}
    </section> */