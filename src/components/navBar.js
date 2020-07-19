import React from "react"
import { Link } from "gatsby"
import logo from "../images/site-logo.svg"

import { Navbar, Nav } from "react-bootstrap"

export default function HeaderNavbar({ pageInfo }) {
  
  console.log(pageInfo);

  return (
    <>
      <Navbar variant="dark" expand="md" id="site-navbar">
        {/* <Container> */}

        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img className="navbar-logo" src={logo} alt="Site Logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="index">
                Home
              </Nav.Link>
            </Link>
            <Link to="/library" className="link-no-style">
              <Nav.Link as="span" eventKey="library">
                Library
              </Nav.Link>
            </Link>
          </Nav>

          <Nav className="ml-auto">
            <Link to="/" className="navbar-button link-no-style btn btn-outline-primary">
              Contact Us
            </Link>
          </Nav>

        </Navbar.Collapse>

        {/* </Container> */}
      </Navbar>
    </>
  )
}
