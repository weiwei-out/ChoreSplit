// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import CreateChore from "./CreateChore";
import CompletedChores from "./CompletedChores";
import ChoreCard from "./ChoreCard";

function App() {
  const [chores, setChores] = useState([]);

  useEffect(() => {
    fetch("/test")
      .then((r) => r.json())
      .then(setChores)
      // .then(console.log("before"))
      .then(console.log(chores));
    // .then(console.log("after"));
    // .then((items) => console.log(items));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage chores={chores} />
        </Route>
        <Route path="/createchore">
          <CreateChore />
        </Route>
        <Route path="/completedchores">
          <CompletedChores />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
