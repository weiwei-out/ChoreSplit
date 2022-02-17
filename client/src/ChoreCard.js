import React from "react";

export default function ChoreCard({ chore, handleUpdate }) {
  return (
    <div className="ChoreCard">
      <div className="ImageCard">
        <img className="Image" />
      </div>
      <h1 className="ChoreTitle">{chore.name}</h1>
      <p className="ChoreDescription">{chore.description}</p>
      <p className="ChorePoints">{chore.points} Points</p>
      <p className="ChoreStatus">
        Status: {chore.completed ? "Completed" : "Incomplete"}
      </p>
      <button
        onClick={(event) => {
          event.preventDefault();
          // console.log(chore.id);
          handleUpdate(chore.id); //FIX
        }}
      >
        Complete
      </button>
    </div>
  );
}
