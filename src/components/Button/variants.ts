import { tv } from "tailwind-variants";

const button = tv({
  slots: {
    base: "relative flex items-center justify-center gap-x-1 rounded-sm transition font-normal cursor-pointer overflow-hidden disabled:cursor-default",
    loadingPanel:
      "absolute flex items-center justify-center top-0 left-0 w-full h-full bg-inherit transition-opacity opacity-0 pointer-events-none",
  },
  variants: {
    variant: {
      primary: {
        base: "text-white bg-primary-100 hover:bg-primary-80 active:bg-primary-90 focus:bg-primary-100",
      },
      secondary: {
        base: "text-primary-100 bg-primary-40 hover:bg-primary-30 active:bg-primary-40 focus:bg-primary-40",
      },
      white: {
        base: "border-1 border-general-50 text-primary-100 bg-white hover:bg-primary-30 active:bg-white focus:bg-white",
      },
      destructive: {
        base: "text-white bg-red-100 hover:bg-red-80 active:bg-red-90 focus:bg-red-100",
      },
      destructiveSecondary: {
        base: "text-red-100 bg-red-30 hover:bg-red-40 active:bg-red-30 focus:bg-red-30",
      },
    },
    size: {
      sm: { base: "min-h-9 min-w-9 text-sm" },
      md: { base: "min-h-10 min-w-10 text-base" },
      lg: { base: "min-h-12 min-w-12 text-base" },
    },
    icon: {
      true: "",
    },
    content: {
      true: "",
    },
    loading: {
      false: { base: "disabled:bg-general-50  disabled:text-white" },
      true: {
        loadingPanel: "opacity-100",
      },
    },
  },
  compoundVariants: [
    { icon: false, content: true, size: "sm", class: "px-5" },
    { icon: true, content: true, size: "sm", class: "px-4" },
    {
      icon: true,
      content: false,
      size: "sm",
      class: "px-1.5",
    },

    { icon: false, content: true, size: "md", class: "px-6" },
    { icon: true, content: true, size: "md", class: "px-5" },
    { icon: true, content: false, size: "md", class: "px-2" },

    { icon: false, content: true, size: "lg", class: "px-6" },
    { icon: true, content: true, size: "lg", class: "px-5" },
    { icon: true, content: false, size: "lg", class: "px-3" },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default button;
