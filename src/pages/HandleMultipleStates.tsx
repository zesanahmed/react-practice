import React, { useState } from "react";

const HandleMultipleStates = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };

  // DRY -> Don't Repeat Yourself
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleNameChange}
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleNameChange}
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        type="text"
        name="email"
        id="email"
      />
      <button className="btn btn-secondary">Submits</button>
    </form>
  );
};

export default HandleMultipleStates;
