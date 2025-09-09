import type { ColorPickerProps } from "./types";
import colorPicker from "./variants";

export function ColorPicker({
  className,
  onChange,
  ...props
}: ColorPickerProps) {
  return (
    <label>
      <div
        tabIndex={0}
        className={colorPicker({
          className,
        })}
        style={{ background: props.value || props.defaultValue }}
      >
        <input
          tabIndex={-1}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
          className="hidden"
          type="color"
          {...props}
        />
      </div>
    </label>
  );
}
