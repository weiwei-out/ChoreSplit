// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import CreateChore from "./CreateChore";
import CompletedChores from "./CompletedChores";
import ChoreCard from "./ChoreCard";
import Login from "./Login";

function App() {
  const [isPublic, setIsPublic] = useState([]);
  const [chores, setChores] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // for auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

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

  //PATCH set completed = true
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

  //DELETE
  function handleDelete(id) {
    fetch(`/chores/${id}`, {
      // fetch(`http://localhost:3000/chores/${id}`, {
      method: "DELETE",
      // }).then(() => {
      //   debugger;
      // });
    })
      .then(
        setIsPublic(
          isPublic.filter((c) => {
            return c.id !== id;
          })
        )
      )
      .then(
        setChores(
          chores.filter((c) => {
            return c.id !== id;
          })
        )
      );
    // console.log("Nick 3/4:", id);
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
  if (!user) return <Login onLogin={setUser} />;
  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <HomePage
            chores={chores}
            isPublic={isPublic}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
          <Route path="/new">
            <CreateChore user={user} />
          </Route>
        </Route>
        <Route path="/createchore">
          <CreateChore postChore={postChore} />
        </Route>
        <Route path="/completedchores">
          <CompletedChores isPublic={isPublic} handleDelete={handleDelete} />
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
