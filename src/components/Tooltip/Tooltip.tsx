import { createPortal } from "react-dom";
import type { TooltipProps } from "./types";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import tooltip from "./variants";
import { calcTooltipPosition, getScrollableParents } from "./utils";

export function Tooltip({
  isOpen,
  content,
  defaultPosition,
  borderRadius = 4,
  outerOffset = 8,
  arrowDistance,
  children,
  className,
}: TooltipProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isLocOpen, setIsLocOpen] = useState(!!isOpen);
  const [, startHoverTransition] = useTransition();

  const wrapRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollableParents = useMemo(() => {
    return wrapRef.current && isMounted
      ? getScrollableParents(wrapRef.current)
      : [];
  }, [isMounted]);

  const isFinalOpen = useMemo(
    () => (typeof isOpen !== "undefined" ? isOpen : isLocOpen),
    [isLocOpen, isOpen]
  );

  const offsetsData = useMemo(() => {
    const arrowSize = 16;
    const arrowLeg = arrowSize / Math.SQRT2;
    return {
      arrowSize,
      arrowLeg,
      arrowLegHalf: arrowLeg / 2,
      arrowOffset: arrowSize / 2 + borderRadius,
      arrowDist:
        typeof arrowDistance !== "undefined" ? arrowDistance : arrowSize / 2,
    };
  }, [borderRadius, arrowDistance]);

  const actualizePosition = useCallback(() => {
    if (wrapRef.current && contentRef.current && arrowRef.current) {
      const position = calcTooltipPosition(
        wrapRef.current,
        contentRef.current,
        outerOffset,
        offsetsData.arrowOffset,
        offsetsData.arrowDist,
        offsetsData.arrowLegHalf,
        defaultPosition
      );
      Object.assign(contentRef.current.style, {
        left: `${position.box.left}px`,
        top: `${position.box.top}px`,
        minHeight: `${offsetsData.arrowSize + borderRadius * 2}px`,
        minWidth: `${offsetsData.arrowSize + borderRadius * 2}px`,
        maxHeight: `calc(100dvh - ${outerOffset * 2}px)`,
        maxWidth: `calc(100dvw - ${outerOffset * 2}px)`,
        borderRadius: `${borderRadius}px`,
      });
      Object.assign(arrowRef.current.style, {
        width: `${offsetsData.arrowLeg}px`,
        left: `${position.arrow.left}px`,
        top: `${position.arrow.top}px`,
      });
      return position;
    }
  }, [borderRadius, defaultPosition, offsetsData, outerOffset]);

  useLayoutEffect(() => {
    if (isMounted) {
      let animFrame: number | undefined;
      let lastPosJSON = "";
      const viewChangeHandler = () => {
        const newPosData = actualizePosition();
        const newPosJSON = JSON.stringify(newPosData);
        if (newPosJSON !== lastPosJSON) {
          animFrame = requestAnimationFrame(() => {
            viewChangeHandler();
          });
        }
        lastPosJSON = newPosJSON;
      };
      viewChangeHandler();

      window.addEventListener("resize", viewChangeHandler);
      for (const el of scrollableParents) {
        el.addEventListener("scroll", viewChangeHandler);
      }

      return () => {
        cancelAnimationFrame(animFrame!);
        window.removeEventListener("resize", viewChangeHandler);
        for (const el of scrollableParents) {
          el.removeEventListener("scroll", viewChangeHandler);
        }
      };
    }
  }, [actualizePosition, isFinalOpen, isMounted, scrollableParents]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <span
        data-opened={isFinalOpen}
        ref={wrapRef}
        className="group/tooltip-activator relative"
        onMouseEnter={() => {
          setIsLocOpen(true);
        }}
        onMouseLeave={() => {
          startHoverTransition(() => setIsLocOpen(false));
        }}
      >
        {children}
      </span>
      {isMounted &&
        createPortal(
          <div
            className={tooltip({
              open: isFinalOpen,
              className,
            })}
            onMouseEnter={() => {
              setIsLocOpen(true);
            }}
            onMouseLeave={() => {
              startHoverTransition(() => setIsLocOpen(false));
            }}
            role="tooltip"
            ref={contentRef}
          >
            <span
              className="fixed aspect-square bg-inherit z-0 rotate-45"
              ref={arrowRef}
            />
            <span
              style={{ "--offset": `${offsetsData.arrowDist}px` } as object}
              className="absolute -left-[var(--offset)] -top-[var(--offset)] -right-[var(--offset)] -bottom-[var(--offset)]"
            />
            <span
              style={{ "--offset": `${offsetsData.arrowDist}px` } as object}
              className="relative z-10 overflow-hidden max-w-full max-h-full"
            >
              {content}
            </span>
          </div>,
          document.body
        )}
    </>
  );
}
