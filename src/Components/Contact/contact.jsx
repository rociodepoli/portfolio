import React from "react";
import styles from './contact.module.css';

export default function Contact(){
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
          netlify
          name="contact"
          onSubmit={(e)=> handleSubmit(e)}
          >
          <h2 >
            ¡Contrátame!
          </h2>
          <p >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div >
            <label htmlFor="name" >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div >
            <label htmlFor="email"  >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div >
            <label
              htmlFor="message"
>              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit">
            Enviar
          </button>
        </form>
        </div>
    )
}