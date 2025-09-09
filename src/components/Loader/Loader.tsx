import { LoaderIcon } from "lucide-react";
import type { LoaderProps } from "./types";
import loader from "./variants";

export function Loader({ className, ...props }: LoaderProps) {
  return <LoaderIcon className={loader({ className })} {...props} />;
}
