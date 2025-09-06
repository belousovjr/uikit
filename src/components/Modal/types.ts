import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";
import { VariantProps } from "tailwind-variants";
import modal from "./variants";
import { LucideIcon } from "lucide-react";

export interface ModalProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof modal> {
  children?: ReactNode;
  onClose?: () => unknown;
  isOpen: boolean;
  closeIcon?: ReactElement<LucideIcon>;
}
