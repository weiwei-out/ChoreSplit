import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
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
            <span className="HeaderLinks">Add Chore</span>
            <span className="HeaderLinks">Completed Chores</span>
          </span>
        </div>
      </div>
    </>
  );
}
