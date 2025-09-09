import type { ComponentPropsWithRef, ReactNode } from "react";
import select from "./variants";
import { VariantProps } from "tailwind-variants";

export interface SelectOption<T extends string> {
  title?: string;
  name: string;
  value: T;
}

export interface SelectProps<T extends string>
  extends Omit<
      ComponentPropsWithRef<"select">,
      "children" | "onChange" | "value" | "defaultValue" | "size"
    >,
    VariantProps<typeof select> {
  options?: SelectOption<T>[];
  onChange?: (value: T) => unknown;
  label?: ReactNode;
  value?: T;
  defaultValue?: T;
}
