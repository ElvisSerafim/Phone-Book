import { Contact } from "@/utils/interfaces";

export interface ContactProps {
  contact: Contact;
  deleteContact: (contactId: string) => void;
  onSelectContact: (contact: Contact) => void;
}
