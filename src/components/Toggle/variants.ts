import { tv } from "tailwind-variants";

const checkbox = tv({
  slots: {
    base: "group/checkbox relative flex items-center rounded-2xl transition cursor-pointer bg-primary-40 text-white has-checked:bg-primary-100 group-hover/toggle-wrap:bg-primary-60 has-disabled:bg-general-50 has-disabled:cursor-default",
    circle:
      "absolute flex h-[calc(100%-theme(spacing.2))] rounded-full aspect-square text-base transition-[left] left-1",
  },
  variants: {
    size: {
      sm: { base: "w-6.5 h-4", circle: "group-has-checked/checkbox:left-3.5" },
      md: { base: "w-11 h-6", circle: "group-has-checked/checkbox:left-6" },
      lg: { base: "w-12 h-7", circle: "group-has-checked/checkbox:left-6" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export default checkbox;
