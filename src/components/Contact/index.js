import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  // the hook that'll manage the form data
  // set the initial state to empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  // destructuring formState
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    console.log("errorMessage", errorMessage);
  };

  // JSX
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      {/* create a form with three inputs */}
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* // name input // email input // message text area */}
        <div>
          <label htmlFor="name">Name:</label>
          {/* handleChange is an event listener that fires when a keystroke is typed and syncs the internal state */}
          <input
            type="text"
            defaultValue={name}
            // will fire the event once the user has changed focus from the input field
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            // will fire the event once the user has changed focus from the input field
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            // will fire the event once the user has changed focus from the input field
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {/* ensures an email address or message are entered */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
