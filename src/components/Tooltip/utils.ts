import { tooltipPositions } from "./constants";
import { TooltipPos, TooltipPosData } from "./types";

export function calcTooltipPosition(
  wrapEl: HTMLSpanElement,
  contentEl: HTMLDivElement,
  outerOffset: number,
  arrowOffset: number,
  arrowDist: number,
  arrowLegHalf: number,
  defaultPosition?: TooltipPos
) {
  const wrapRect = wrapEl.getBoundingClientRect();
  const contentRect = contentEl.getBoundingClientRect();
  const { innerWidth, innerHeight } = window;
  const wrapCenter = {
    x: wrapRect.left + wrapRect.width / 2,
    y: wrapRect.top + wrapRect.height / 2,
  };

  const positions = new Set([
    defaultPosition || tooltipPositions[0],
    "bottom",
  ] as TooltipPos[]);

  const posesData: {
    [K in TooltipPos]?: {
      data: TooltipPosData;
      isInscribed: boolean;
    };
  } = {};

  for (const pos of positions) {
    const isHor = pos === "right" || pos === "left";
    let minBoxLeft = outerOffset;
    let minBoxRight = innerWidth - outerOffset;
    let minBoxTop = outerOffset;
    let minBoxBottom = innerHeight - outerOffset;

    if (isHor) {
      if (pos === "left") {
        minBoxRight = Math.min(minBoxRight, wrapRect.left - arrowDist);
      } else if (pos === "right") {
        minBoxLeft = Math.max(minBoxLeft, wrapRect.right + arrowDist);
      }
      minBoxBottom = Math.min(
        minBoxBottom,
        wrapCenter.y - arrowOffset + contentRect.height
      );
      minBoxTop = Math.max(
        minBoxTop,
        wrapCenter.y + arrowOffset - contentRect.height
      );
    } else {
      if (pos === "top") {
        minBoxBottom = Math.min(minBoxBottom, wrapRect.top - arrowDist);
      } else if (pos === "bottom") {
        minBoxTop = Math.max(minBoxTop, wrapRect.bottom + arrowDist);
      }
      minBoxRight = Math.min(
        minBoxRight,
        wrapCenter.x - arrowOffset + contentRect.width
      );
      minBoxLeft = Math.max(
        minBoxLeft,
        wrapCenter.x + arrowOffset - contentRect.width
      );
    }
    const boxWidth = minBoxRight - minBoxLeft;
    const boxHeight = minBoxBottom - minBoxTop;

    const isInscribed =
      boxWidth >= contentRect.width && boxHeight >= contentRect.height;

    const box = {
      left: pos === "right" ? minBoxLeft : minBoxRight - contentRect.width,
      top: pos === "bottom" ? minBoxTop : minBoxBottom - contentRect.height,
    };
    const newPosData = {
      box,
      arrow: {
        left:
          pos === "left"
            ? wrapRect.left - arrowLegHalf - arrowDist
            : pos === "right"
            ? wrapRect.right - arrowLegHalf + arrowDist
            : wrapCenter.x - arrowLegHalf,
        top:
          pos === "bottom"
            ? wrapRect.bottom - arrowLegHalf + arrowDist
            : pos === "top"
            ? wrapRect.top - arrowLegHalf - arrowDist
            : wrapCenter.y - arrowLegHalf,
      },
    };
    if (isHor) {
      newPosData.box.top -= (minBoxBottom - minBoxTop - contentRect.height) / 2;
    } else {
      newPosData.box.left -= (minBoxRight - minBoxLeft - contentRect.width) / 2;
    }
    posesData[pos] = {
      data: newPosData,
      isInscribed,
    };
    if (isInscribed && defaultPosition === pos) {
      break;
    }
  }

  if (defaultPosition && posesData[defaultPosition]?.isInscribed) {
    return posesData[defaultPosition].data;
  }

  return posesData.bottom!.data;
}

export function getScrollableParents(el: Element) {
  const scrollableParents = [];
  let parent = el.parentNode as Element | null;

  while (parent && parent.nodeType === 1) {
    const style = getComputedStyle(parent);
    const overflowY = style.overflowY;
    const overflowX = style.overflowX;
    const isScrollableY =
      (overflowY === "auto" ||
        overflowY === "scroll" ||
        overflowY === "overlay") &&
      parent.scrollHeight > parent.clientHeight;
    const isScrollableX =
      (overflowX === "auto" ||
        overflowX === "scroll" ||
        overflowX === "overlay") &&
      parent.scrollWidth > parent.clientWidth;

    if (isScrollableY || isScrollableX) scrollableParents.push(parent);
    parent = parent.parentNode as Element | null;
  }

  scrollableParents.push(window);
  return scrollableParents;
}
