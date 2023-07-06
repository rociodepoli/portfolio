import React from "react";
import About from "../About/about";
import Contact from "../Contact/contact";
import Home from "../Home/home";
import Work from "../Work/work";
import styles from "./portfolio.module.css";
import Background from "../StarsBackground/background";
export default function PortfolioPage() {
  return (
    <div className={styles.container}>
<Background></Background>
      <section id="home" className={styles.section1}>
        <Home></Home>
      </section>
      <section id="about" className={styles.section}>
        <About></About>
      </section>
      <section id="work" className={styles.section}>
        <Work></Work>
      </section>
      <section id="contact" className={styles.section}>
        <Contact></Contact>
      </section>
    </div>
  );
}
