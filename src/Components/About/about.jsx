import React from "react";
import styles from "./about.module.css";
import Stack from "./SkillSet/skillset";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>
        A little about <strong style={{ color: "burlywood" }}>me</strong>
      </h1>
      <div className={styles.about}>
         <div>
          <img
          className={styles.img}
            src="https://res.cloudinary.com/dcvopyrah/image/upload/v1687982256/porfolio/WhatsApp_Image_2023-06-28_at_16.57.00_lmteyl.jpg"
            alt="me"
          />
        </div>
        <div className={styles.paragraph}>
          <p>
            After a little over a year of living abroad, I have opened myself up
            to amazing experiences outside of my comfort zone. These experiences
            have allowed me to develop in all kinds of environments and to think
            about my future differently than I did before.
          </p>
          <p>
            That's how I ended up studying web development, with no previous
            knowledge about this world, but with a strong attitude towards
            learning and a desire for better job opportunities. I put in a lot
            of effort to learn these new skills and pursue my goals.
          </p>
          <p>
            I consider myself to have skills in both frontend and backend
            development. While I enjoy working in backend development, I have
            been primarily working in the frontend area in my recent projects.
            Despite this, I have been able to excel in my work and produce
            high-quality results.
          </p>
        </div>
       
      </div>
      <Stack />
    </div>
  );
}
