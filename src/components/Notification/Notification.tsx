import notification from "./variants";
import { NotificationProps } from "./types";
import { XIcon } from "lucide-react";

export function Notification({
  className,
  variant,
  light,
  children,
  onClose,
  ...props
}: NotificationProps) {
  return (
    <div
      className={notification({
        variant,
        light,
        className,
      })}
      {...props}
    >
      {children}
      <button
        className="absolute top-3 right-3 cursor-pointer"
        type="button"
        title="Close Notification"
        onClick={() => {
          onClose?.();
        }}
      >
        <XIcon />
      </button>
    </div>
  );
}
