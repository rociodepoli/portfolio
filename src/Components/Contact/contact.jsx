import React, {useEffect, useState} from "react";
import styles from "./contact.module.css";
import validateForm from './validator.js'
import Swal from 'sweetalert2'


export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    initial: "Fill in all the fields"
  })

  function encode(data) {
    console.log(data)
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = (e) => {
    setErrors(
      validateForm[e.target.name]({
        ...errors,
        [e.target.name]: e.target.value,
      })
  
    );
 
    setForm({...form, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [form.message]);
  
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
    if( !Object.keys(errors).at(0)){
      fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name: form.name, email: form.email, message:form.message }),
    })
      .then(() => 
      Swal.fire({
        title: 'Message sent!',
        text: "Thank you for your time, I'll be in touch ASAP",
        icon: 'success',
        timer: 5000,
  timerProgressBar: true,
      }))
      .catch((error) => 
      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'OK'
      }));
    } else{
      Swal.fire({
        title: 'Error!',
        text: Object.values(errors)[0],
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    
  }
  return (
    <div className={styles.container}>
      <form
        data-netlify="true"
        name="contact"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1>Want more <strong style={{ color: "burlywood" }}>info</strong>?</h1>
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
                value={form.name}
                className={styles.input}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.formdiv}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={styles.input}
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={styles.formdiv}>
              <label htmlFor="message"> Message</label>
              <textarea
                id="message"
                className={styles.textarea}
                name="message"
                value={form.message}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button type="submit" className={styles.send}>Send!</button>
          </div>
        </div>
      </form>
    </div>
  );
}
