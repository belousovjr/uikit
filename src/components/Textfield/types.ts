import type {
  ComponentPropsWithRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react";
import textfield from "./variants";
import { VariantProps } from "tailwind-variants";

type InitialTextfieldProps = Omit<
  VariantProps<typeof textfield>,
  "leftIcon" | "rightIcon"
> & {
  label?: ReactNode;
};

export type InputProps = {
  multiline?: false;
  leftIcon?: ReactElement<ReactElement<SVGProps<SVGSVGElement>, "svg">>;
  rightIcon?: ReactElement<ReactElement<SVGProps<SVGSVGElement>, "svg">>;
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
