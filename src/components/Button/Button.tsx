import type { ButtonProps } from "./types";

export function Button({
  //   loading,
  //   startIcon,
  //   endIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`py-3 px-6 rounded-sm button-primary ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
