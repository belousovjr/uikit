import type { ComponentPropsWithRef, ReactElement } from "react";
import button from "./variants";
import { VariantProps } from "tailwind-variants";
import { LucideIcon } from "lucide-react";

export interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof button> {
  loading?: boolean;
  icon?: ReactElement<LucideIcon>;
}
