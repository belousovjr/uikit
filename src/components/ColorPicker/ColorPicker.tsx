import { useEffect, useMemo, useRef } from "react";
import type { ColorPickerProps } from "./types";
import colorPicker from "./variants";

export function ColorPicker({
  className,
  onChange,
  size,
  ...props
}: ColorPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const finValue = useMemo(
    () => props.value ?? props.defaultValue,
    [props.value, props.defaultValue]
  );

  useEffect(() => {
    if (finValue) {
      wrapRef.current!.style.background = finValue;
    } else {
      wrapRef.current!.style.background = finValue || "#000";
    }
  }, [finValue]);

  return (
    <label className="h-min relative">
      <div
        ref={wrapRef}
        tabIndex={!props.disabled ? 0 : -1}
        className={colorPicker({
          className,
          size,
        })}
        onKeyDown={(e) => {
          if (
            document.activeElement !== inputRef.current &&
            e.code === "Space"
          ) {
            e.preventDefault();
            inputRef.current!.click();
          }
        }}
      >
        <input
          ref={inputRef}
          tabIndex={-1}
          onChange={(e) => {
            if (onChange) {
              onChange?.(e.target.value);
            } else if (!finValue) {
              wrapRef.current!.style.background = e.target.value || "#000";
            }
          }}
          className="absolute opacity-0 pointer-events-none left-0 top-0 w-full h-full"
          type="color"
          {...props}
        />
      </div>
    </label>
  );
}
