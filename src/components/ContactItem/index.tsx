"use client";

import Image from "next/image";
import garbageIcon from "../../../public/icons/garbage.svg";
import phoneIcon from "../../../public/icons/phone.svg";
import styles from "./contactItem.module.css";
import { ContactProps } from "./contactItem.utils";

const ContactItem = ({
  contact,
  deleteContact,
  onSelectContact,
}: ContactProps) => {
  const deleteContactItem = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    deleteContact(contact.id);
  };
  return (
    <div
      className={styles["contact-wrapper"]}
      onClick={() => onSelectContact(contact)}
    >
      <div>
        <div className={styles["contact-name"]}>
          <h3>
            {contact.firstName} {contact.lastName}
          </h3>
        </div>
        <div className={styles["contact-phone"]}>
          <Image alt="phone icon" src={phoneIcon} width={22} height={22} />
          <h4 className={styles["contact-number"]}>{contact.phoneNumber}</h4>
        </div>
      </div>
      <div className={styles["contact-delete"]} onClick={deleteContactItem}>
        <Image
          alt="remove item icon"
          src={garbageIcon}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default ContactItem;
