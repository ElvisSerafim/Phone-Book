import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ButtonProps {
  text: string;
  icon: StaticImport;
  onClick: () => void;
}
