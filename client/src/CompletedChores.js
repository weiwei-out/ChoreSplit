import React from "react";
import ChoreCard from "./ChoreCard";

export default function CompletedChores({ isPublic, handleDelete }) {
  return (
    <div id="try9">
      <p id="try10">Completed Chores</p>
      {isPublic
        .filter((chore) => chore.completed === true)
        .map((i) => (
          <ChoreCard chore={i} key={`${i.id}`} handleDelete={handleDelete} />
        ))}
    </div>
  );
}
