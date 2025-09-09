import loader from "./variants";
import { VariantProps } from "tailwind-variants";
import { LucideProps } from "lucide-react";

export interface LoaderProps extends LucideProps, VariantProps<typeof loader> {}
