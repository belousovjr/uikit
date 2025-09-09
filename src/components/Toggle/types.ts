import type { ComponentPropsWithoutRef, ReactNode } from "react";
import toggle from "./variants";
import { VariantProps } from "tailwind-variants";

export interface ToggleProps
  extends Omit<
      ComponentPropsWithoutRef<"input">,
      | "type"
      | "size"
      | "value"
      | "defaultValue"
      | "checked"
      | "defaultChecked"
      | "onChange"
    >,
    VariantProps<typeof toggle> {
  active?: boolean;
  onChange?: (value: boolean) => unknown;
  circleElement?: ReactNode;
}
