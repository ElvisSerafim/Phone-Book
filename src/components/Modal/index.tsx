"use client";
import styles from "./modal.module.css";
import { ModalProps } from "./modal.utils";

const Modal = ({ children, title, isOpen, setIsOpen }: ModalProps) => {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={onClose}
      id="modal"
      className={isOpen ? styles.modal : styles["hidden-modal"]}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles["modal-content"]}
      >
        <div className={styles["modal-header"]}>
          <h3>{title}</h3>
          <span onClick={onClose} className={styles.close}>
            &times;
          </span>
        </div>
        <div className={styles["content-children"]}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
