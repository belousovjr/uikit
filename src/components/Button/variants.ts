import { tv } from "tailwind-variants";

const button = tv({
  base: "relative flex items-center gap-x-1 rounded-sm transition font-normal cursor-pointer overflow-hidden disabled:cursor-default",
  variants: {
    variant: {
      primary:
        "text-white bg-primary-100 hover:bg-primary-80 active:bg-primary-90 focus:bg-primary-100",
      secondary:
        "text-primary-100 bg-primary-40 hover:bg-primary-30 active:bg-primary-40 focus:bg-primary-40",
      white:
        "border-1 border-general-50 text-primary-100 bg-white hover:bg-primary-30 active:bg-white focus:bg-white",
      destructive:
        "text-white bg-red-100 hover:bg-red-80 active:bg-red-90 focus:bg-red-100",
      destructiveSecondary:
        "text-red-100 bg-red-30 hover:bg-red-40 active:bg-red-30 focus:bg-red-30",
    },
    size: {
      sm: "min-h-9 min-w-9 text-sm",
      md: "min-h-10 min-w-10 text-base",
      lg: "min-h-12 min-w-12 text-base",
    },
    iconState: {
      noIcon: "",
      iconAndContent: "",
      onlyIcon: "",
    },
    loading: {
      false: "disabled:bg-general-50  disabled:text-white ",
    },
  },
  compoundVariants: [
    { iconState: "noIcon", size: "sm", class: "px-5" },
    { iconState: "iconAndContent", size: "sm", class: "px-4" },
    { iconState: "onlyIcon", size: "sm", class: "px-1.5" },

    { iconState: "noIcon", size: "md", class: "px-6" },
    { iconState: "iconAndContent", size: "md", class: "px-5" },
    { iconState: "onlyIcon", size: "md", class: "px-2" },

    { iconState: "noIcon", size: "lg", class: "px-6" },
    { iconState: "iconAndContent", size: "lg", class: "px-5" },
    { iconState: "onlyIcon", size: "lg", class: "px-3" },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    iconState: "noIcon",
  },
});

export default button;
