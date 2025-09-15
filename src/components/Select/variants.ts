import { tv } from "tailwind-variants";

const select = tv({
  slots: {
    base: "appearance-none px-4 border-1 border-general-50 rounded-sm cursor-pointer disabled:cursor-default transition  disabled:text-general-80 disabled:bg-general-50 w-full text-inherit",
    opt: "bg-white checked:bg-primary-30 checked:text-primary-100",
    wrap: "h-min max-w-full text-general-100",
  },
  variants: {
    size: {
      sm: {
        base: "text-sm px-4 h-9",
      },
      md: {
        base: "text-base px-4 h-10",
      },
      lg: {
        base: "text-base px-4 h-12",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default select;
