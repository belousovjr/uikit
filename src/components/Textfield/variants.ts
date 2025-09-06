import { tv } from "tailwind-variants";

const textfield = tv({
  base: "flex flex-1 items-center justify-center rounded-sm transition bg-white text-general-100 max-w-full resize-none border-1 border-general-50 placeholder:text-general-60 disabled:text-general-80 disabled:bg-general-50",
  variants: {
    size: {
      sm: "text-sm px-4 py-[calc(theme(spacing.2)-theme(spacing.px))]",
      md: "text-base px-4 py-[calc(theme(spacing.2)-theme(spacing.px))]",
      lg: "text-base px-4 py-[calc(theme(spacing.3)-theme(spacing.px))]",
    },
    leftIcon: {
      true: "pl-12",
    },
    rightIcon: {
      true: "pr-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default textfield;
