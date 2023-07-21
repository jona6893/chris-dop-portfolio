import { PrismicRichText } from "@/components/PrismicRichText";
import { PrismicNextImage } from "@prismicio/next";
import ImageViewer from "react-simple-image-viewer";
import { useCallback, useState } from "react";

/**
 * @typedef {import("@prismicio/client").Content.PhotoGridSlice} PhotoGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGridSlice>} PhotoGridProps
 * @param {PhotoGridProps}
 */
const PhotoGrid = ({ slice }) => {

const [currentImage, setCurrentImage] = useState(0);
const [isViewerOpen, setIsViewerOpen] = useState(false);

  const overlayColorToClass = {
    White: "hover:bg-white/40",
    Black: "hover:bg-black/40",
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

const components = {
  heading4: ({ children }) => (
    <h4 className="col-start-1 row-start-1 w-full text-center text-size5 text-white z-[2]">
      {children}
    </h4>
  ),
};

const images = []
slice.items.forEach((e) =>{
  images.push(`${e.image.url}`)
})

 const openImageViewer = (index) => {
   setCurrentImage(index);
   setIsViewerOpen(true);
 }

 const closeImageViewer = () => {
   setCurrentImage(0);
   setIsViewerOpen(false);
 };

 
  

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-[1400px] mx-auto"
    >
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:px-[10vw] max-lg:px-[5vw] py-4 ">
        {slice.items.map((item, index) => (
          <div
            onClick={() => openImageViewer(index)}
            key={index + 16}
            className="grid items-center justify-items-center grid-cols-1 grid-rows-1 aspect-[10/16] relative cursor-pointer	"
          >
            <div
              className={`grid items-center justify-items-center duration-300 ${
                item.hover_color ? overlayColorToClass[item.hover_color] : ""
              } opacity-0 hover:opacity-100 col-start-1 row-start-1 w-full h-full inset-0 z-[1]`}
            >
              <PrismicRichText field={item.title} components={components} />
            </div>
            <PrismicNextImage
              field={item.image}
              /* width={"100%"} */
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="z-50">
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={true}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
              backgroundStyle={{
                backgroundColor: "rgba(0,0,0,0.3)",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
