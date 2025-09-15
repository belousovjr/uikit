import { createPortal } from "react-dom";
import type { ModalProps } from "./types";
import { useEffect, useMemo, useState } from "react";
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
  const [isAnimOpen, setIsAnimOpen] = useState(isOpen);

  const { base, wrapper } = useMemo(
    () =>
      modal({
        open: isOpen === isAnimOpen,
      }),
    [isAnimOpen, isOpen]
  );

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (interval === undefined && isAnimOpen !== isOpen) {
      interval = setInterval(
        () => {
          setIsAnimOpen(isOpen);
          clearInterval(interval!);
        },
        isOpen ? 0 : 200
      );
    }
    return () => {
      clearInterval(interval!);
    };
  }, [isAnimOpen, isOpen]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted &&
    createPortal(
      (isAnimOpen || isOpen) && (
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
            {onClose && (
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
            )}
            {children}
          </div>
        </div>
      ),
      document.body
    )
  );
}
