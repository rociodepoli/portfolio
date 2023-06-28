import React from "react";
import styles from "./home.module.css";

export default function Home() {
    
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h1 className={styles.hi}>Hi, I'm </h1>
          <h1 className={styles.rocio}> Rocío</h1>
        </div>
        <div className={styles.typewriter}>
          <h3>Full Stack Web Developer</h3>
        </div>
        <span>Welcome to my Portfolio!</span>
      </div>
      <div 
      //style={{overflow:'hidden'}}
      >
        <img
        className={styles.img}
          src="https://res.cloudinary.com/dcvopyrah/image/upload/v1687980703/porfolio/WhatsApp_Image_2023-06-28_at_16.24.55_x7pc8z.jpg"
          alt="m"
        />
      </div>
    </div>
  );
}
