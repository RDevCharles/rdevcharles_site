import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
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
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="/work">Work</Nav.Link>
            </Link>
            <NavDropdown title="Open Source" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/RDevCharles/VanillaJSOnlineSchool">
                Online School
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/RDevCharles/blogApp">
                Blogging Ios App
              </NavDropdown.Item>
              
              <NavDropdown.Item href="https://github.com/RDevCharles/recording_studio_template">
                Music Creator Website
              </NavDropdown.Item>

            </NavDropdown>

            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link href="#deets">Contact</Nav.Link>
            </Link>
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
    boxShadow: "0px 0px 10px black"
  }
};

export default NavBar;