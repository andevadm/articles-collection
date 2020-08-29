import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types';

import logo from "../images/site-logo.svg"

import { Navbar, Nav, Modal, Button } from "react-bootstrap"


export default function HeaderNavbar({ pageInfo }) {

  return (
    <>
      <Navbar variant="dark" expand="md" id="site-navbar">

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
            <NavbarButton>
              Contact Us
            </NavbarButton> 
          </Nav>

        </Navbar.Collapse>

      </Navbar>
    </>
  )
}

function NavbarButton({children}) {
// Right button on navigation panel
// children contain a string with name of the button

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" className="navbar-button" onClick={handleShow}>
        {children}
      </Button>

      <Modal dialogClassName="navbar-button-modal" show={show} onHide={handleClose}>
        <Modal.Header className="text-secondary-dark bg-secondary-light" closeButton>
          <Modal.Title >
            {children}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          Find the source files on <a href="https://github.com/andevadm/articles-collection">GitHub</a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  
}

NavbarButton.propTypes = {
  children: PropTypes.string.isRequired
};