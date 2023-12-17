"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";
import plusIcon from "../../public/icons/plus.svg";
import phoneHeader from "../../public/icons/phone-header.svg";
import SearchInput from "@/components/SearchInput";
import { useCallback, useEffect, useState } from "react";
import ContactItem from "@/components/ContactItem";
import Modal from "@/components/Modal";
import Form from "@/components/Form";
import Pagination from "@/components/Pagination";
import { apiFetch } from "@/service/api";
import { Contact } from "@/utils/interfaces";
import { FormContact } from "@/components/Form/form.utils";
import Image from "next/image";

const SIZE = 4;

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [countContacts, setCountContacts] = useState(0);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact>();

  const [page, setPage] = useState(0);

  const getContacts = async () => {
    try {
      const contactsData = await apiFetch(`?page=${page}`, "GET");
      setCountContacts(contactsData.count);
      setContacts(contactsData.contacts);
      setFilteredContacts(contactsData.contacts);
    } catch (error) {}
  };

  const openAddModal = () => {
    setIsOpenAddModal(true);
  };

  const deleteContact = async (contactId: string) => {
    try {
      await apiFetch("deleteContact", "DELETE", { id: contactId });
      getContacts();
    } catch (error) {}
  };

  const searchContact = useCallback(() => {
    const searchedContactArray = contacts.filter((item) =>
      item.lastName.includes(search)
    );
    setFilteredContacts(searchedContactArray);
  }, [search]);

  const updateContact = async (toUpdateContact: FormContact) => {
    try {
      await apiFetch("updateContact", "PUT", toUpdateContact);
      getContacts();
      setIsOpenEditModal(false);
    } catch (error) {}
  };

  const createContact = async (toCreateContact: FormContact) => {
    try {
      await apiFetch("createContact", "POST", toCreateContact);
      getContacts();
      setIsOpenAddModal(false);
    } catch (error) {}
  };

  useEffect(() => {
    getContacts();
  }, [page]);

  useEffect(() => {
    searchContact();
  }, [search]);

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles["phone-header"]}>
          <Image
            alt="phone book icon"
            src={phoneHeader}
            width={30}
            height={30}
          />
          <h2>Phone Book App</h2>
        </div>
        <div className={styles["header-content"]}>
          <h2>Contacts</h2>
          <Button
            icon={plusIcon}
            onClick={openAddModal}
            text="Add Contact"
          ></Button>
        </div>
        <SearchInput search={search} setSearch={setSearch} />
        {contacts.length === 0 ? (
          <div className={styles["empty-list"]}>
            <h3>Add a Contact in your Book.</h3>
          </div>
        ) : (
          <div className={styles["list-contact"]}>
            {filteredContacts.map((contact) => {
              return (
                <div key={contact.id}>
                  <ContactItem
                    onSelectContact={(selectContact) => {
                      setSelectedContact(selectContact);
                      setIsOpenEditModal(true);
                    }}
                    deleteContact={deleteContact}
                    contact={contact}
                  />
                </div>
              );
            })}
          </div>
        )}

        <Pagination
          page={page}
          setPage={setPage}
          size={SIZE}
          total={search !== "" ? filteredContacts.length : countContacts}
        />
      </div>
      <Modal
        isOpen={isOpenAddModal}
        setIsOpen={setIsOpenAddModal}
        title="Add Contact"
      >
        <Form mode="add" onSubmitForm={createContact} />
      </Modal>
      <Modal
        isOpen={isOpenEditModal}
        setIsOpen={setIsOpenEditModal}
        title="Edit Contact"
      >
        <Form
          mode="edit"
          onSubmitForm={updateContact}
          contact={selectedContact}
        />
      </Modal>
    </main>
  );
}
