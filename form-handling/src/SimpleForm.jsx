import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>React Form Example</h2>

      <label htmlFor="">Name:</label>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />

      <label htmlFor="">Email:</label>
      <input
        type="email"
        name=""
        id=""
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
