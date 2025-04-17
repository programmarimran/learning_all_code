import React from "react";

const SimpleForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <h1>Simple Form Handle with Event</h1>
      <form className="form" onSubmit={handleForm}>
        <input
          className="input"
          type="text"
          placeholder="Your name"
          name="name"
        />
        <br />
        <br />
        <input
          className="input"
          type="email"
          placeholder="Your email"
          name="email"
        />
        <br />
        <br />
        <input className="btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
