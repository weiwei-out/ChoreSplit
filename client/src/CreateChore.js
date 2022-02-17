import React, { useState } from "react";

export default function CreateChore({ postChore }) {
  console.log("CreateChore");
  const [newChore, setNewChore] = useState({
    name: "",
    description: "",
    points: 0,
    completed: false,
  });

  function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setNewChore({ ...newChore, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    postChore(newChore);
  }

  return (
    <>
      <p>Add a Chore!</p>
      <form onSubmit={handleSubmit}>
        <label>Chore Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="description" onChange={handleChange} />
        <label>Points:</label>
        <input type="number" name="name" onChange={handleChange} />
        <label>Completed:</label>
        <input type="boolean" name="name" onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
