import React, { useState } from "react";

export default function CreateChore({ postChore }) {
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
    <div id="try9">
      <p id="try10">Add a Chore!</p>
      <div id="notime">
        <form onSubmit={handleSubmit}>
          <div id="try11">
            <label>Chore Name:</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div id="try11">
            <label>Description:</label>
            <input type="text" name="description" onChange={handleChange} />
          </div>
          <div id="try11">
            <label>Points:</label>
            <input type="number" name="points" onChange={handleChange} />
          </div>
          <div id="try11">
            <label>Completed:</label>

            <input type="boolean" name="completed" onChange={handleChange} />
          </div>
          <div id="try11">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
