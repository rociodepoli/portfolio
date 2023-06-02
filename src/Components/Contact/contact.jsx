import React, {useEffect} from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);
  
  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("message");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (textarea.scrollHeight > textarea.offsetHeight) {
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.overflowY = "hidden";
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <div className={styles.container}>
      <form
        data-netlify="true"
        name="contact"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2>Want more info?</h2>
        <div className={styles.sections}>
          <div className={styles.text} >
          <p>
            If you found my profile interesting, you can send me a message to
            ask me anything you need or just to say hi. I would be delighted to
            respond.
          </p></div>
          <div className={styles.form}>
            <div className={styles.formdiv}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formdiv}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                name="email"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.formdiv}>
              <label htmlFor="message"> Message</label>
              <textarea
                id="message"
                className={styles.textarea}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Send!</button>
          </div>
        </div>
      </form>
    </div>
  );
}
