import type { ComponentPropsWithoutRef } from "react";
import checkbox from "./variants";
import { VariantProps } from "tailwind-variants";

export interface CheckboxProps
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
    VariantProps<typeof checkbox> {
  checked?: boolean;
  onChange?: (value: boolean) => unknown;
}
