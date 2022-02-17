// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import CreateChore from "./CreateChore";
import CompletedChores from "./CompletedChores";

function App() {
  const [chore, setChore] = useState([]);

  useEffect(() => {
    fetch("/test")
      .then((r) => r.json())
      .then(setChore)
      .then(console.log(chore));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
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
