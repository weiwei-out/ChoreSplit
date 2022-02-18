import React from "react";
import ChoreCard from "./ChoreCard";

export default function HomePage({
  chores,
  isPublic,
  handleUpdate,
  handleDelete,
  claimChore,
}) {
  return (
    <div>
      <div>
        <p>Homepage - Status: Working</p>
        <p>Homepage - Section 1: Chores assigned to User (incomplete)</p>
        {chores
          .filter((chore) => chore.completed === false)
          .map((i) => (
            <ChoreCard
              chore={i}
              key={`${i.id}`}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              claimChore={claimChore} //new
            />
          ))}
        <p>Homepage - Section 2: Chores unassigned (incomplete)</p>
        {isPublic
          .filter((chore) => chore.completed === false)
          .map((i) => (
            <ChoreCard
              chore={i}
              key={`${i.id}`}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              claimChore={claimChore} //new
            />
          ))}
        <p></p>
      </div>
    </div>
  );
}
