import React from "react";
import { Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      {/* <p>Navigation Bar - Status: Working</p> */}
      <div>
        <div id="NavBar">
          <span className="HeaderSpan"></span>
          <span className="HeaderSpan" id="HeaderName">
            ChoreSplit
          </span>
          <span className="HeaderSpan">
            <button as={Link} to="/new">
              Add Chore
            </button>
            <button as={Link} to="/userchores">
              Completed Chores
            </button>
            <button onClick={handleLogoutClick}>Logout</button>
          </span>
        </div>
      </div>
    </>
  );
}
