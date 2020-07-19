import React from "react"
import { Link } from "gatsby"
import logo from "../images/site-logo.svg"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

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

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/" className="link-no-style">
              <Nav.Link as="span" eventKey="index">
                Home
              </Nav.Link>
            </Link>
            <Link to="/catalog" className="link-no-style">
              <Nav.Link as="span" eventKey="catalog">
                Catalog
              </Nav.Link>
            </Link>
          </Nav>

          <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav>

        </Navbar.Collapse>

        {/* </Container> */}
      </Navbar>
    </>
  )
}
