import { PrismicRichText } from "@/components/PrismicRichText";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { useSpring, animated } from '@react-spring/web'
/**
 * @typedef {import("@prismicio/client").Content.ProjectGridSlice} ProjectGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectGridSlice>} ProjectGridProps
 * @param {ProjectGridProps}
 */




const ProjectGrid = ({ slice }) => {
 const [isSticky, setIsSticky] = useState(false);
 const stickyRef = useRef(null);
 const [stickyStartPos, setStickyStartPos] = useState(null);

 const [springProps, setSpringProps] = useSpring(() => ({
   width: "100%",
 }));

  const titleText = {
    paragraph: ({ children }) => (
      <p className="text-size5 text-white col-start-1 row-start-1 z-[1] uppercase">
        {children}
      </p>
    ),
  };
  const kategori = {
    heading3: ({ children }) => (
      <p
        className={`text-center w-fit whitespace-nowrap duration-[400ms] p-4 font-normal text-size4 text-black col-start-1 row-start-1 z-[1] uppercase`}
      >
        {children}
      </p>
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


  
    useEffect(() => {
      const handleScroll = () => {
        const element = stickyRef.current;

        if (element) {
          const elementPosition = element.getBoundingClientRect().top;

          if (elementPosition <= 10 && !isSticky) {
            setIsSticky(true);
            setStickyStartPos(window.scrollY);
          } else if (elementPosition > 10 && isSticky) {
            setIsSticky(false);
          }

          if (isSticky) {
            const newWidth = Math.max(
              100 - ((window.scrollY - stickyStartPos) / 100) * 100,
              0
            );
            setSpringProps({ width: `${newWidth}%` });
          } else {
            setSpringProps({ width: "100%" });
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isSticky]);

  console.log(springProps);
  console.log(isSticky);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative lg:px-[15vw] max-lg:px-[2vw]"
    >
      <div
        id={nanoid()}
        ref={stickyRef}
        className={`sticky bg-white z-[2] top-0 left-0 flex items-center w-full md:py-3 max-md:py-3`}
      >
        <animated.div
          style={springProps}
          className={`duration-100
           h-[1px] border-gray-400 border-t `}
        />

        <PrismicRichText field={slice.primary.kategori} components={kategori} />
        <animated.div
          style={springProps}
          className={`duration-100
           h-[1px] border-gray-400 border-t `}
        />
      </div>
      <div className="lg:grid max-lg:flex flex-col grid-cols-2 gap-4 justify-items-center items-center">
        {slice.items.map((item, index) => {
          return (
            <div
              key={nanoid()}
              className="relative w-full lg:h-[25vh] max-lg:h-[18vh] min-h-[10rem] overflow-hidden m-auto"
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
      </div>
    </section>
  );
};

export default ProjectGrid;


