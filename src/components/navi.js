import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navi() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to={"/"}>
              Sg 
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link className="nav-link" to={"/"}>
              Github
            </Link>
            <Link className="nav-link" to={"/posts"}>
              Github
            </Link>
            <Link className="nav-link" to={"/comments"}>
              Github
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
