import { tv } from "tailwind-variants";

const colorPicker = tv({
  base: "border-1 border-general-80 rounded-md cursor-pointer",
  variants: {
    size: {
      sm: "w-9 h-9",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default colorPicker;
