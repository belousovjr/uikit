import type { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
  startIcon?: string;
  endIcon?: string;
}
