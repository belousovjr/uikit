import type { ComponentPropsWithRef, ReactElement, ReactNode } from "react";
import textfield from "./variants";
import { VariantProps } from "tailwind-variants";
import { LucideIcon } from "lucide-react";

type InitialTextfieldProps = Omit<
  VariantProps<typeof textfield>,
  "leftIcon" | "rightIcon"
> & {
  label?: ReactNode;
};

export type InputProps = {
  multiline?: false;
  leftIcon?: ReactElement<LucideIcon>;
  rightIcon?: ReactElement<LucideIcon>;
} & Omit<
  ComponentPropsWithRef<"input">,
  "size" | "checked" | "defaultChecked" | "type" | "children"
> &
  InitialTextfieldProps;

export type TextareaProps = {
  multiline: true;
} & Omit<ComponentPropsWithRef<"textarea">, "defaultChecked" | "children"> &
  InitialTextfieldProps;

export type TextfieldProps = InputProps | TextareaProps;
