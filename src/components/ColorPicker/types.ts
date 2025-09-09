import type { ComponentPropsWithoutRef } from "react";
import colorPicker from "./variants";
import { VariantProps } from "tailwind-variants";

export interface ColorPickerProps
  extends Omit<
      ComponentPropsWithoutRef<"input">,
      | "onChange"
      | "size"
      | "type"
      | "value"
      | "defaultValue"
      | "checked"
      | "defaultChecked"
    >,
    VariantProps<typeof colorPicker> {
  onChange?: (value: string) => unknown;
  value?: string;
  defaultValue?: string;
}
