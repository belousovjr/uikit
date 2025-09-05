import type { GlobalProvider } from "@ladle/react";
import "./index.css";

export const Provider: GlobalProvider = ({
  children,
  //   globalState,
  //   storyMeta,
}) => children;
