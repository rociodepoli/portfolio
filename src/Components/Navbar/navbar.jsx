import React, { createRef, useEffect, useState } from "react";

import { Link } from "react-scroll";
import styles from "./navbar.module.css";

export default function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  
  useEffect(()=>{
    if(window.screen.width > 426) setClicked(false) 
  console.log(clicked)
},[window.screen.width])

  return (
    <nav className={styles.container}>
      <div className={styles.image}>
      <Link
          spy={true}
          smooth={true}
          offset={-80}
          to="home"
          isDynamic={true}
        >
        <img
          src="https://res.cloudinary.com/dcvopyrah/image/upload/v1679438550/porfolio/imagen_2023-03-21_193003038_1_Traced_bkjwlp.svg"
          alt=""
        />
        </Link>
      </div>
      <div className={clicked && window.screen.width < 427 ? styles.divActive : styles.div}>
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
      {window.screen.width < 427 && 
      <div className={styles.mobile} onClick={()=> setClicked(!clicked)}>
        {clicked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
          >
            <title>close</title>
            <path d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z" />
            <path d="M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 20 20"
            id="Wycon-Hamburger"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="16" height="2" x="2" y="6"  />
            <rect width="16" height="2" x="2" y="10"  />
            <rect width="16" height="2" x="2" y="14"  />
          </svg>
        )}
      </div>
      }
    </nav>
  );
}
