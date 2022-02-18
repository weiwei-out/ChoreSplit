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
        <div id="bar2">
          <div className="bar1">My Chores</div>
          <div id="bar4">
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
          </div>
        </div>
        <div id="bar3">
          <div className="bara">Public Chores</div>
          <div id="bar5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
