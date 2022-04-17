import React from "react";
import { Link } from "react-scroll";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  const navLinks = [
    { name: "about", title: "About" },
    { name: "work", title: "Work" },
    { name: "contact", title: "Contact" },
  ];
  return (
    <>
      <Navbar
        style={navStyles.nav}
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <h1 style={{ fontSize: "24px" }}>
            R<span style={{ color: "#41b883" }}>{"{dev}"}</span>Designs
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {navLinks.map((item) => {
              return (
                <Link
                  activeClass="active"
                  to={item.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Nav.Link href="#">{item.title}</Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const navStyles = {
  nav: {
    width: "100vw",
    backgroundColor: "black",
    boxShadow: "0px 0px 10px black",
  },
};

export default NavBar;
