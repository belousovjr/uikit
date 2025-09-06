import { tv } from "tailwind-variants";

const modal = tv({
  base: "relative bg-white rounded-md min-h-12 my-auto p-7 shadow-lg max-w-full w-auto transition-transform scale-90 group-data-[open=true]/modal:scale-100",
});

export default modal;
