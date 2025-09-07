import { useMemo, useRef } from "react";
import type { ToggleProps } from "./types";
import toggle from "./variants";

export function Toggle({
  className,
  active,
  size,
  disabled,
  children,
  onChange,
  ...props
}: ToggleProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { base, circle } = useMemo(
    () =>
      toggle({
        size,
        disabled,
      }),
    [disabled, size]
  );

  return (
    <label className="flex items-center gap-3 select-none">
      <div
        tabIndex={!disabled ? 0 : -1}
        onKeyDown={(e) => {
          if (document.activeElement !== inputRef.current && e.code === "Space")
            inputRef.current!.checked = !inputRef.current!.checked;
        }}
        className={base({ className })}
      >
        <input
          onChange={(e) => {
            onChange?.(e.target.checked);
          }}
          role="checkbox"
          type="checkbox"
          tabIndex={-1}
          className="hidden"
          checked={active}
          disabled={disabled}
          ref={inputRef}
          {...props}
        />

        <span className={circle()} />
      </div>
      {children && <span>{children}</span>}
    </label>
  );
}
