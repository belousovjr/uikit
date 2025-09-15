import type { ComponentPropsWithRef, ReactElement, SVGProps } from "react";
import button from "./variants";
import { VariantProps } from "tailwind-variants";

export interface ButtonProps
  extends Omit<ComponentPropsWithRef<"button">, "value">,
    Omit<VariantProps<typeof button>, "icon" | "content" | "loading"> {
  loading?: boolean;
  icon?: ReactElement<ReactElement<SVGProps<SVGSVGElement>, "svg">>;
}
