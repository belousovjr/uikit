import type { ComponentPropsWithRef, ReactElement } from "react";
import button from "./variants";
import { VariantProps } from "tailwind-variants";
import { LucideIcon } from "lucide-react";

export interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    Omit<VariantProps<typeof button>, "iconState" | "loading"> {
  loading?: boolean;
  icon?: ReactElement<LucideIcon>;
}
