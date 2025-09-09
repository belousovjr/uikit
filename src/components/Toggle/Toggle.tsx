import { useMemo, useRef } from "react";
import type { ToggleProps } from "./types";
import toggle from "./variants";

export function Toggle({
  className,
  active,
  size,
  circleElement,
  children,
  onChange,
  ...props
}: ToggleProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { base, circle } = useMemo(
    () =>
      toggle({
        size,
      }),
    [size]
  );

  return (
    <label className="group/toggle-wrap flex items-center gap-3 select-none">
      <div
        tabIndex={!props.disabled ? 0 : -1}
        onKeyDown={(e) => {
          if (
            document.activeElement !== inputRef.current &&
            e.code === "Space"
          ) {
            e.preventDefault();
            inputRef.current!.click();
          }
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
          ref={inputRef}
          {...props}
        />

        <span className={circle()}>
          {circleElement ?? (
            <span className="bg-current w-full h-full rounded-full" />
          )}
        </span>
      </div>
      {children && <span>{children}</span>}
    </label>
  );
}
