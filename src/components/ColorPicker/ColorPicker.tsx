import { useRef } from "react";
import type { ColorPickerProps } from "./types";
import colorPicker from "./variants";

export function ColorPicker({
  className,
  onChange,
  size,
  ...props
}: ColorPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label>
      <div
        tabIndex={0}
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
        style={{ background: props.value || props.defaultValue || "#000" }}
      >
        <input
          tabIndex={-1}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
          className="invisible h-full w-full"
          type="color"
          {...props}
        />
      </div>
    </label>
  );
}
