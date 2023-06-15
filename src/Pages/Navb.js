import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
const Navb = () => {
    const naviagate = useNavigate();
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Films</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link onClick={()=> naviagate(`/About-Us`)}>About-Us</Nav.Link>
            <Nav.Link href="/Contact-Us">Contact-Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navb