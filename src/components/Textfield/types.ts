import type { ComponentPropsWithRef, ReactElement } from "react";
import textfield from "./variants";
import { VariantProps } from "tailwind-variants";
import { LucideIcon } from "lucide-react";

type InitialTextfieldProps = Omit<
  VariantProps<typeof textfield>,
  "leftIcon" | "rightIcon"
> & {
  label?: string;
};

export type InputProps = {
  multiline?: false;
  leftIcon?: ReactElement<LucideIcon>;
  rightIcon?: ReactElement<LucideIcon>;
} & Omit<
  ComponentPropsWithRef<"input">,
  "size" | "checked" | "defaultChecked" | "type"
> &
  InitialTextfieldProps;

export type TextareaProps = {
  multiline: true;
} & Omit<ComponentPropsWithRef<"textarea">, "defaultChecked"> &
  InitialTextfieldProps;

export type TextfieldProps = InputProps | TextareaProps;
