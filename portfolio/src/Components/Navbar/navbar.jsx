import React, { createRef } from "react";

import { Link } from "react-scroll";
import styles from "./navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={styles.container}>
      <div className={styles.image}>
        <img src="https://res.cloudinary.com/dcvopyrah/image/upload/v1679438550/imagen_2023-03-21_193003038_1_Traced_bkjwlp.svg" alt="astronaut" />
      </div>
      <div className={styles.div}>
      <Link
      className={styles.link}
        activeClass={styles.active}
        spy={true}
        smooth={true}
       offset={-80}
        to="home"
        isDynamic={true}
      >
        Home
      </Link>
      <Link
      className={styles.link}
        activeClass={styles.active}
        spy={true}
        isDynamic={true}
        smooth={true}
        offset={-80}
        to="about"
      >
        About
      </Link>
      <Link
      className={styles.link}
        activeClass={styles.active}
        spy={true}
        isDynamic={true}
        smooth={true}
        offset={-80}
        to="work"
      >
        Work
      </Link>
      <Link
      className={styles.link}
        activeClass={styles.active}
        spy={true}
        isDynamic={true}
        smooth={true}
        offset={-75}
        to="contact"
      >
        Contact
      </Link>
      </div>
    </nav>
  );
}
