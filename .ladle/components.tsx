import type { GlobalProvider } from "@ladle/react";
import "./index.css";

export const Provider: GlobalProvider = ({
  children,
  //   globalState,
  //   storyMeta,
}) => <div className="p-2 bg-white">{children}</div>;
