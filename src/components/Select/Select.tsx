import { useMemo } from "react";
import type { SelectProps } from "./types";
import select from "./variants";

export function Select<T extends string>({
  options,
  className,
  label,
  size,
  onChange,
  ...props
}: SelectProps<T>) {
  const { base, opt, wrap } = useMemo(() => select({ size }), [size]);
  return (
    <div className={wrap({ className })}>
      {label && <div className="text-sm/5 text-general-80 mb-1">{label}</div>}
      <select
        onChange={(e) => {
          onChange?.(e.target.value as T);
        }}
        className={base()}
        {...props}
      >
        {options?.map((option) => (
          <option key={option.value} className={opt()} {...option}>
            {option.title || option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
