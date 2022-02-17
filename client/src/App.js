// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import CreateChore from "./CreateChore";
import CompletedChores from "./CompletedChores";
import ChoreCard from "./ChoreCard";

function App() {
  const [isPublic, setIsPublic] = useState([]);
  const [chores, setChores] = useState([]);

  //GET -> Chores that belong to User
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(setChores)
      .then(console.log(chores));
  }, []);

  //GET -> All Chores
  useEffect(() => {
    fetch("/chores")
      .then((r) => r.json())
      .then(setIsPublic)
      .then(console.log(isPublic));
  }, []);

  function handleUpdate(id) {
    fetch(`/chores/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
  }

  //POST
  function postChore(chore) {
    fetch("/chores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chore),
    })
      .then((res) => res.json())
      .then((newChore) => {
        setChores([newChore, ...chores]);
      });
  }

  //User? -> filter results using JOIN table -> pass HomePage {chores}

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage
            chores={chores}
            isPublic={isPublic}
            handleUpdate={handleUpdate}
          />
        </Route>
        <Route path="/createchore">
          <CreateChore postChore={postChore} />
        </Route>
        <Route path="/completedchores">
          <CompletedChores isPublic={isPublic} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*

user clicks "complete" button -> 
1) frontend: state: show -> hide 
2) backend: complete: false -> true

User no longer sees the card. 

user clicks Completed Chores tab -> 
0) useEffect runs -> gathers all chores where complete: true 
1) the chore that was completed will show 



*/
