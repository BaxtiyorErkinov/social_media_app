import React, { FC, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { Search } from "@mui/icons-material";

import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.wrapper}>
        <Search />
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
