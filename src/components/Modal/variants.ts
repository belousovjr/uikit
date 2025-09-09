import { tv } from "tailwind-variants";

const modal = tv({
  slots: {
    base: "relative bg-white rounded-md min-h-12 my-auto p-7 shadow-lg max-w-full w-auto transition-transform scale-90",
    wrapper:
      "fixed flex justify-center left-0 top-0 w-full h-dvh bg-black/10 overflow-y-auto transition-opacity duration-200 opacity-0 z-40",
  },
  variants: {
    open: {
      true: {
        wrapper: "opacity-100",
        base: "scale-100",
      },
    },
  },
  defaultVariants: { open: false },
});

export default modal;
