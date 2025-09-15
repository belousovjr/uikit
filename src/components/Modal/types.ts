import {
  ComponentPropsWithRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react";
import { VariantProps } from "tailwind-variants";
import modal from "./variants";

export interface ModalProps
  extends ComponentPropsWithRef<"div">,
    Omit<VariantProps<typeof modal>, "open"> {
  children?: ReactNode;
  onClose?: () => unknown;
  isOpen: boolean;
  closeIcon?: ReactElement<ReactElement<SVGProps<SVGSVGElement>, "svg">>;
}
