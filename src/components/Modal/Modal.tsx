import { createPortal } from "react-dom";
import type { ModalProps } from "./types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { XIcon } from "lucide-react";
import modal from "./variants";

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  closeIcon,
}: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLocOpen, setIsLocOpen] = useState(isOpen);
  const closeAnimInterval = useRef<NodeJS.Timeout>(null);

  const { base, wrapper } = useMemo(
    () =>
      modal({
        open: isOpen === isLocOpen,
      }),
    [isLocOpen, isOpen]
  );

  const clearAnimInterval = useCallback(() => {
    if (closeAnimInterval.current !== null) {
      clearInterval(closeAnimInterval.current);
      closeAnimInterval.current = null;
    }
  }, []);

  useEffect(() => {
    if (closeAnimInterval.current === null && isLocOpen !== isOpen) {
      closeAnimInterval.current = setInterval(
        () => {
          setIsLocOpen(isOpen);
          clearAnimInterval();
        },
        isOpen ? 0 : 200
      );
    }
    return () => {
      clearAnimInterval();
    };
  }, [isLocOpen, isOpen, clearAnimInterval]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted &&
    (isLocOpen || isOpen) &&
    createPortal(
      <div
        role="dialog"
        onClick={() => {
          onClose?.();
        }}
        className={wrapper()}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={base({
            className,
          })}
        >
          <button
            onClick={() => {
              onClose?.();
            }}
            title="Close Modal"
            type="button"
            className="absolute top-3 right-3 cursor-pointer text-general-70"
          >
            {closeIcon ?? <XIcon />}
          </button>
          {children}
        </div>
      </div>,
      document.body
    )
  );
}
