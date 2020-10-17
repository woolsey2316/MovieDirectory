import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

var Navigation = ({ theme, searchBar }) => {
  return (
    <Container fluid="true" className="row justify-content-end">
      {searchBar}
      <Navbar
        bg={theme === 'transparent' ? 'transparent' : ''}
        variant={theme === 'transparent' ? 'dark' : 'light'}
      >
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
    </Container>
  )
}

export default Navigation
