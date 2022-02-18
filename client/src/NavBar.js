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
            <Link to="/">
              <div>ChoreSplit</div>
            </Link>
          </span>
          <span className="HeaderSpan">
            <Link to="/createchore">
              <div className="try8">Add Chore</div>
            </Link>
            <Link to="/completedchores">
              <div className="try8">Completed Chores</div>
            </Link>

            <button className="try9" onClick={handleLogoutClick}>
              Logout
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
