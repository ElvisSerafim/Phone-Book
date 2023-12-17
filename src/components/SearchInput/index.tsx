"use client";

import Image from "next/image";
import searchIcon from "../../../public/icons/search.svg";
import styles from "./searchInput.module.css";
import { SearchInputProps } from "./searchInput.utils";

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <div className={styles["search-wrapper"]}>
      <Image
        alt="search icon image"
        style={{ paddingBottom: 2 }}
        src={searchIcon}
        width={20}
        height={20}
      />
      <input
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for contact by last name..."
      />
    </div>
  );
};

export default SearchInput;
