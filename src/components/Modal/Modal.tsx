import { createPortal } from "react-dom";
import type { ModalProps } from "./types";
import { useCallback, useEffect, useRef, useState } from "react";
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
        data-open={isOpen === isLocOpen}
        onClick={() => {
          onClose?.();
        }}
        className="group/modal fixed flex justify-center left-0 top-0 w-full h-dvh bg-black/10 z-auto overflow-y-auto transition-opacity duration-200 opacity-0 data-[open=true]:opacity-100"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={modal({
            className,
          })}
        >
          <button
            onClick={() => {
              onClose?.();
            }}
            title="Close Modal"
            className="absolute top-3 right-3 cursor-pointer text-general-70"
          >
            {closeIcon ?? <XIcon />}
          </button>
          <div>{children}</div>
        </div>
      </div>,
      document.body
    )
  );
}
