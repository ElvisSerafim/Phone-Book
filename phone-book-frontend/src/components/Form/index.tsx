"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./form.module.css";
import { FormContact, FormProps } from "./form.utils";
import { normalizePhoneNumber } from "@/utils/normalize";

const Form = ({ mode, contact, onSubmitForm }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormContact>();

  const phoneValue = watch("phoneNumber");

  useEffect(() => {
    setValue("phoneNumber", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    if (mode === "edit" && contact) {
      setValue("firstName", contact.firstName);
      setValue("lastName", contact.lastName);
      setValue("phoneNumber", contact.phoneNumber);
    }
  }, [mode, contact, setValue]);

  const onSubmit: SubmitHandler<FormContact> = (data) => {
    let toUpdateContact: FormContact = {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
    };

    if (mode === "edit") {
      toUpdateContact = { ...toUpdateContact, id: contact?.id };
    }
    reset();
    onSubmitForm(toUpdateContact);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles["form-item"]}>
        <label>First Name:</label>
        <input
          required
          className={styles.input}
          placeholder="First name..."
          {...register("firstName")}
        />
      </div>
      <div className={styles["form-item"]}>
        <label>Last Name:</label>
        <input
          required
          className={styles.input}
          placeholder="Last name..."
          {...register("lastName")}
        />
      </div>
      <div className={styles["form-item"]}>
        <label>Phone Number:</label>
        <input
          required
          className={styles.input}
          placeholder="777-777-7777"
          type="tel"
          {...register("phoneNumber", { minLength: 10 })}
        />
        {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (
          <span className={styles.error}>
            The phone number is 777-777-7777 format.
          </span>
        )}
      </div>
      <div className={styles["button-wrapper"]}>
        <button className={styles.button} type="submit">
          {mode === "edit" ? "Update Contact" : "Create Contact"}
        </button>
      </div>
    </form>
  );
};

export default Form;
