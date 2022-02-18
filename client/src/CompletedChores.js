import React from "react";
import ChoreCard from "./ChoreCard";

export default function CompletedChores({ isPublic, handleDelete }) {
  return (
    <div>
      <p>CompletedChores - Status: Working</p>
      {isPublic
        .filter((chore) => chore.completed === true)
        .map((i) => (
          <ChoreCard chore={i} key={`${i.id}`} handleDelete={handleDelete} />
        ))}
    </div>
  );
}
