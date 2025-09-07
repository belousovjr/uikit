import { LoaderIcon } from "lucide-react";
import type { ButtonProps } from "./types";
import button from "./variants";
import { useMemo } from "react";

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
  const { base, loadingPanel } = useMemo(
    () =>
      button({
        variant,
        size,
        loading,
        icon: !!icon,
        content: !!children,
      }),
    [children, icon, loading, size, variant]
  );

  return (
    <button
      disabled={disabled || loading}
      className={base({ className })}
      {...props}
    >
      {icon}
      {children}
      <span className={loadingPanel()}>
        <LoaderIcon className="animate-spin" />
      </span>
    </button>
  );
}
