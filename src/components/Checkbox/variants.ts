import { tv } from "tailwind-variants";

const checkbox = tv({
  slots: {
    base: "group/checkbox relative flex items-center justify-center rounded-sm transition cursor-pointer bg-white text-white border border-px border-general-50 w-5 aspect-square not-has-disabled:group-hover/checkbox-wrap:border-general-60 not-has-disabled:has-checked:border-primary-100 has-checked:bg-primary-100 has-disabled:bg-general-30 has-disabled:cursor-default has-disabled:text-general-50",
    check: "transition opacity-0 group-has-checked/checkbox:opacity-100",
  },
});

export default checkbox;
