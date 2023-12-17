"use client";

import Image from "next/image";
import styles from "./pagination.module.css";
import { Action, PaginationProps } from "./pagination.utils";
import prevIcon from "../../../public/icons/prev.svg";
import nextIcon from "../../../public/icons/next.svg";

const Pagination = ({ page, setPage, total, size }: PaginationProps) => {
  const pageNumbers: number[] = [];

  for (let i = 0; i < Math.ceil(total / size); i++) {
    pageNumbers.push(i);
  }

  const changeCurrentPage = (actionPage: Action) => {
    if (
      actionPage === "next" &&
      page + 1 <= pageNumbers[pageNumbers.length - 1]
    ) {
      setPage(page + 1);
    }

    if (actionPage === "prev" && page - 1 >= 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles["pagination-container"]}>
      <ul className={styles.pagination}>
        <li
          onClick={() => changeCurrentPage("prev")}
          className={styles["actions"]}
        >
          <Image alt="prev icon" src={prevIcon} width={20} height={20} />
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              page === number
                ? `${styles["page-number"]} ${styles.active}`
                : styles["page-number"]
            }
            onClick={() => setPage(number)}
          >
            {number + 1}
          </li>
        ))}
        <li
          onClick={() => changeCurrentPage("next")}
          className={styles["actions"]}
        >
          <Image alt="next icon" src={nextIcon} width={20} height={20} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
