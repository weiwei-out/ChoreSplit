import React from "react";

export default function ChoreCard({
  chore,
  handleUpdate,
  handleDelete,
  claimChore,
}) {
  return (
    <div className="chore_card">
      <div className="image_card">
        <img className="image" />
      </div>
      <h1 className="chore_title">{chore.name}</h1>
      <p className="chore_description">{chore.description}</p>
      <p className="chore_points">{chore.points} Points</p>
      <p className="chore_status">
        Status: {chore.completed ? "Completed" : "Incomplete"}
      </p>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleUpdate(chore.id);
        }}
      >
        Complete
      </button>
      <button
        onClick={(event) => {
          // event.preventDefault();
          console.log(chore.id);
          handleDelete(chore.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={(event) => {
          // event.preventDefault();
          console.log(chore.id);
          claimChore({ user_id: 4, chore_id: chore.id }); //static
        }}
      >
        Claim
      </button>
    </div>
  );
}
