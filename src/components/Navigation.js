import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

var Navigation = ({ variant, bg, searchBar }) => {
  return (
    <Navbar
      bg={bg}
      variant={variant}
    >
      {searchBar}
      <Navbar.Brand href="/home">Tv&MovieDb</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link active={window.location.pathname === '/home'} href="/home">
          Home
        </Nav.Link>
        <Nav.Link active={window.location.pathname === '/movie'} href="/movie">
          Movie
        </Nav.Link>
        <Nav.Link
          active={window.location.pathname === '/television'}
          href="/television"
        >
          Television
        </Nav.Link>
        <Nav.Link active={window.location.pathname === '/actor'} href="/actor">
          Actor
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
