import { ComponentPropsWithRef, ReactNode } from "react";
import { VariantProps } from "tailwind-variants";
import tooltip from "./variants";

export interface TooltipProps
  extends Omit<ComponentPropsWithRef<"div">, "content">,
    Omit<VariantProps<typeof tooltip>, "open"> {
  children?: ReactNode;
  content?: ReactNode;
  isOpen?: boolean;
  defaultPosition?: TooltipPos;
  outerOffset?: number;
  borderRadius?: number;
  arrowDistance?: number;
}

export type TooltipPos = "bottom" | "left" | "top" | "right";

export interface TooltipPosData {
  box: { top: number; left: number };
  arrow: { top: number; left: number };
}
