/**
 * @typedef {import("@prismicio/client").Content.IconSlice} IconSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IconSlice>} IconProps
 * @param {IconProps}
 */
const Icon = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for icon (variation: {slice.variation}) Slices
    </section>
  );
};

export default Icon;
