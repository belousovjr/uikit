import type { ComponentPropsWithRef } from "react";
import notification from "./variants";
import { VariantProps } from "tailwind-variants";

export interface NotificationProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof notification> {
  onClose?: () => unknown;
}
