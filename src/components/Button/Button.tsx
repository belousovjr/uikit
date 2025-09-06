import { LoaderIcon } from "lucide-react";
import type { ButtonProps } from "./types";
import button from "./variants";

export function Button({
  loading,
  icon,
  className,
  variant,
  size,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={button({
        variant,
        size,
        loading,
        iconState:
          children && icon
            ? "iconAndContent"
            : children
            ? "noIcon"
            : "onlyIcon",
        className,
      })}
      {...props}
    >
      {icon}
      {children}
      <span
        data-loading={loading}
        className="absolute flex items-center justify-center top-0 left-0 w-full h-full bg-inherit transition-opacity opacity-0 data-[loading=true]:opacity-100 pointer-events-none"
      >
        <LoaderIcon className="animate-spin" />
      </span>
    </button>
  );
}
