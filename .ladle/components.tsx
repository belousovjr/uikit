import type { GlobalProvider } from "@ladle/react";
import "./index.css";

export const Provider: GlobalProvider = ({
  children,
  //   globalState,
  //   storyMeta,
}) => <div className="bg-white p-2">{children}</div>;
