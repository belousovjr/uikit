import { tv } from "tailwind-variants";

const toggle = tv({
  slots: {
    base: "group/toggle relative flex items-center rounded-2xl transition cursor-pointer bg-primary-40 text-white",
    circle:
      "absolute bg-current h-[calc(100%-theme(spacing.2))] rounded-full aspect-square text-base transition-[left] left-1",
  },
  variants: {
    size: {
      sm: { base: "w-6.5 h-4", circle: "group-has-checked/toggle:left-3.5" },
      md: { base: "w-11 h-6", circle: "group-has-checked/toggle:left-6" },
      lg: { base: "w-12 h-7", circle: "group-has-checked/toggle:left-6" },
    },
    disabled: {
      true: {
        base: "bg-general-50 cursor-default",
      },
      false: {
        base: "has-checked:bg-primary-100 hover:bg-primary-60",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default toggle;
