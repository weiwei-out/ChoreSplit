import React from "react";
import ChoreCard from "./ChoreCard";

export default function HomePage({ chores }) {
  console.log("Plzzzzzz");
  return (
    <div>
      <div>
        <p>Homepage - Status: Working</p>
        {chores.map((i) => (
          <ChoreCard chore={i} key={`${i.id}`} />
        ))}
      </div>
    </div>
  );
}
