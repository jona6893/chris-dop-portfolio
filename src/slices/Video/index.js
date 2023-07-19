import { PrismicNextLink } from "@prismicio/next";
import dynamic from "next/dynamic";
/**
 * @typedef {import("@prismicio/client").Content.VideoSlice} VideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSlice>} VideoProps
 * @param {VideoProps}
 */
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});
const Video = ({ slice }) => {
  console.log(slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-4"
    >
      <div className="aspect-[16/9] w-full">
        <ReactPlayer
          url={slice.primary.video_url.url}
          width={"100%"}
          height={"100%"}
          controls={true}
        />
      </div>
    </section>
  );
};

export default Video;
