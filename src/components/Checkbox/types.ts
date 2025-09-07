import type { ComponentPropsWithRef } from "react";
import checkbox from "./variants";
import { VariantProps } from "tailwind-variants";

export interface CheckboxProps
  extends Omit<
      ComponentPropsWithRef<"input">,
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
