import { useMemo, useRef } from "react";
import type { CheckboxProps } from "./types";
import checkbox from "./variants";
import { CheckIcon } from "lucide-react";

export function Checkbox({
  className,
  checked,
  children,
  onChange,
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { base, check } = useMemo(() => checkbox(), []);

  return (
    <label className="group/checkbox-wrap flex items-center gap-3 select-none">
      <div
        tabIndex={!props.disabled ? 0 : -1}
        onKeyDown={(e) => {
          if (
            document.activeElement !== inputRef.current &&
            e.code === "Space"
          ) {
            e.preventDefault();
            inputRef.current!.checked = !inputRef.current!.checked;
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
          checked={checked}
          ref={inputRef}
          {...props}
        />

        <CheckIcon className={check()} size={12} strokeWidth={4} />
      </div>
      {children && <span>{children}</span>}
    </label>
  );
}
