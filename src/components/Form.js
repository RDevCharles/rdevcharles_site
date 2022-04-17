import React, { useEffect } from "react";
import "../App.css";
import Twitter from "../assets/icons/logo-twitter.svg";
import GitHub from "../assets/icons/logo-github.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="contact"
      data-aos="fade-up"
      data-aos-duration="500"
      style={styles.main}
    >
      <div className={"formTopType"} style={styles.formType}>
        <h3 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>
          TELL ME ABOUT YOUR PROJECT
        </h3>
        <p>
          I started with only one goal in mind, to amplify the voice of brands
          and inspire consumers through digital imagery and storytelling.
        </p>

        <div>
          <a className="form-links" href="mailto:rdevcharles@protonmail.com">
            rdevcharles@protonmail.com
          </a>
        </div>
        <div>
          <a className="form-links" href="tel:8607172850">
            860-717-2850
          </a>
        </div>

        <a href={"https://twitter.com/rondellsart"}>
          {" "}
          <img style={styles.social} src={Twitter} alt="twitter"></img>
        </a>
        <a href={"https://github.com/RDevCharles"}>
          <img style={styles.social} src={GitHub} alt="github"></img>
        </a>
      </div>

      <form
        name="contact"
        method="post"
        style={styles.form}
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          placeholder={"Name"}
          type="text"
          name="name"
          style={styles.input}
        ></input>

        <input
          placeholder={"Email"}
          type="text"
          name="email"
          style={styles.input}
        ></input>

        <input
          placeholder={"Phone number"}
          type="text"
          name="phone"
          style={styles.input}
        ></input>

        <input
          placeholder={"Company"}
          type="text"
          name="company"
          style={styles.input}
        ></input>

        <textarea
          placeholder={"Project details"}
          name="message"
          style={styles.messageInput}
        ></textarea>

        <button type="submit" style={styles.button}>Send</button>
      </form>
    </div>
  );
};

const styles = {
  main:{
    marginTop: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundColor: "#0f9b0f",
    background: "linear-gradient(to right, #41b883, #0575e6)",
    backgroundBlendMode: "multiply"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    margin: "4rem 2rem",
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "4rem 2rem",
    textAlign: "left"
  },
  formType: {
    margin: "0rem 4rem",
    borderWidth: "1px",
    padding: "4rem",
    borderRadius: "1rem",
    lineHeight: "2rem",
    color: "white",
    fontSize: "1.5rem",
    marginBottom: "1.5rem"
  },
  input: {
    margin: ".5rem 0rem",
    borderWidth: "1px",
    borderColor: "#D3D3D3",
    borderStyle: "solid"
  },

  label: { margin: "10ox " },
  messageInput: {
    margin: "0rem 0rem",
    height: "6rem",
    borderWidth: "1px",
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    textAlign: "left",
    position: "relative",
    top: 10
  },
  button: {
    borderWidth: "1px",
    borderColor: "#D3D3D3",
    borderStyle: "solid",
    height: "3rem",
    backgroundColor: "#41b883",
    color: "white",
    marginTop: "2rem"
  },
  social: {
    width: "1.5rem",
    marginLeft: "1rem",
    marginRight: "1rem"
  }
};

export default Form;
