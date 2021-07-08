import React from 'react'
import * as reactTbar from 'react-bootstrap'
export default function Title(props) {
    return (
    <div>
        <reactTbar.Navbar bg="dark" text="white" expand="lg">
  <reactTbar.Navbar.Brand href="#">shopping cart</reactTbar.Navbar.Brand>
  <reactTbar.Navbar.Toggle aria-controls="navbarScroll" />
  <reactTbar.Navbar.Collapse id="navbarScroll">
    <reactTbar.Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <reactTbar.Nav.Link href="#action1">Home</reactTbar.Nav.Link>
      <reactTbar.Nav.Link href="#action2">New arrivals</reactTbar.Nav.Link>
      <reactTbar.NavDropdown title="Filter" id="navbarScrollingDropdown">
        <reactTbar.NavDropdown.Item href="#action3">Price: low to high</reactTbar.NavDropdown.Item>
        <reactTbar.NavDropdown.Item href="#action4">Features</reactTbar.NavDropdown.Item>
        <reactTbar.NavDropdown.Divider />
        <reactTbar.NavDropdown.Item href="#action5">Most rated</reactTbar.NavDropdown.Item>
      </reactTbar.NavDropdown>
    </reactTbar.Nav>
    <reactTbar.Form className="d-flex">
      <reactTbar.FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <reactTbar.Button variant="outline-success">Search</reactTbar.Button>
    </reactTbar.Form>
  </reactTbar.Navbar.Collapse>
</reactTbar.Navbar>
    </div>
    )
}