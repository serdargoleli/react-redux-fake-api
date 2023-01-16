import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <Navbar bg="dark" sticky="top" variant="dark" className="mb-4 top-0 ">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to={"/"}>
            SgFakeData | React-Redux
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to={"/"}>
            Users
          </Link>
          <Link className="nav-link" to={"/posts"}>
            Posts
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
