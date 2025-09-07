import { tv } from "tailwind-variants";

const notification = tv({
  base: "relative flex justify-center text-base text-center px-15 py-3",
  variants: {
    variant: {
      primary: "bg-primary-90",
      success: "bg-green-90",
      error: "bg-red-90",
      alert: "bg-yellow-100",
      neutral: "bg-general-90",
    },
    light: {
      false: "text-white",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      light: true,
      class: "bg-primary-40 text-primary-100",
    },
    {
      variant: "success",
      light: true,
      class: "bg-green-40 text-green-100",
    },
    { variant: "error", light: true, class: "bg-red-40 text-red-100" },
    { variant: "alert", light: true, class: "bg-yellow-40 text-yellow-100" },
    {
      variant: "neutral",
      light: true,
      class: "bg-general-40 text-general-100",
    },
  ],
  defaultVariants: {
    variant: "primary",
    light: false,
  },
});

export default notification;
