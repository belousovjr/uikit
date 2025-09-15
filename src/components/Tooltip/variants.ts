import { tv } from "tailwind-variants";

const tooltip = tv({
  base: "fixed bg-primary-100 text-white transition duration-200 opacity-0 pointer-events-none px-4 py-2 z-50 shadow-md",

  variants: {
    open: {
      true: "opacity-100 pointer-events-auto",
    },
  },
  defaultVariants: {
    open: false,
  },
});

export default tooltip;
