import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

var Navigation = () => {
  return (
    <Navbar bg="transparent" variant="dark">
      <Navbar.Brand href="/home">Tv&MovieDb</Navbar.Brand>
      <Nav className="mr-auto justify-content-end">
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
