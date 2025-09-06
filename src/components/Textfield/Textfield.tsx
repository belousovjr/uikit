import { createElement, useMemo } from "react";
import type { InputProps, TextfieldProps } from "./types";
import textfield from "./variants";

export function Textfield({
  label,
  size,
  multiline,
  className,
  ...propsRaw
}: TextfieldProps) {
  const { leftIcon, rightIcon, tag, props } = useMemo(() => {
    if (!multiline) {
      const { leftIcon, rightIcon, ...props } = propsRaw as InputProps;
      return { props, leftIcon, rightIcon, tag: "input" };
    }
    return { props: propsRaw, tag: "textarea" };
  }, [multiline, propsRaw]);

  return (
    <div className="h-min">
      {label && <div className="text-sm/5 text-general-80 mb-1">{label}</div>}
      <span className="relative flex items-center">
        {createElement(tag, {
          className: textfield({
            size,
            leftIcon: !!leftIcon,
            rightIcon: !!rightIcon,
            className,
          }),
          ...props,
        })}
        {leftIcon && (
          <span className="absolute text-general-80 left-4 pointer-events-none">
            {leftIcon}
          </span>
        )}
        {rightIcon && (
          <span className="absolute text-general-80 right-4 pointer-events-none">
            {rightIcon}
          </span>
        )}
      </span>
    </div>
  );
}
