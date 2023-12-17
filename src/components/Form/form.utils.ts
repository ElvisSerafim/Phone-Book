import { Contact } from "@/utils/interfaces";

export interface FormContact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  id?: string;
}

export interface FormProps {
  mode: "edit" | "add";
  contact?: Contact;
  onSubmitForm: (_contact: FormContact) => void;
}
