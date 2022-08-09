import React, { useState } from "react";

function ContactForm() {
  // the hook that'll manage the form data
  // set the initial state to empty strings
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // destructuring formState
  const { name, email, message } = formState;

  function handleChange(e) {
    // below only targets the name input
    // setFormState({...formState, name: e.target.value })
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      {/* create a form with three inputs */}
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* // name input // email input // message text area */}
        <div>
          <label htmlFor="name">Name:</label>
          {/* handleChange is an event listener that fires when a keystroke is typed and syncs the internal state */}
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
