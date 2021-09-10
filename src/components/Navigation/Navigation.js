import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Navigation/navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.link__active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navList}>
          <NavLink
            to="/movies"
            className={styles.link}
            activeClassName={styles.link__active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
