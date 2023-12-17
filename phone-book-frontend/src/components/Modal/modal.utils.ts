import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  setIsOpen: (_open: boolean) => void;
}
