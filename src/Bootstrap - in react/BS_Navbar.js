import React from 'react'
import { Row , Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BS_Navbar()
{
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar bg="info" variant='dark' expand="sm" fixed='top'>
              <Container>
                <Navbar.Brand href="#">
                  <img src="img/vb.jpg" width='100' height='50'
                    style={{ borderRadius: '50%' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Link</Nav.Link>

                    <NavDropdown title="Services" id="basic-navbar-nav">
                    <NavDropdown.Header> Heading 1</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
                      
                      <NavDropdown.Divider />
                      <NavDropdown.Header> Heading 2</NavDropdown.Header>
                      <NavDropdown.Item href="#"> My Service</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Navbar.Text> Sign in here <a href='#'> Login</a></Navbar.Text>
                </Navbar.Collapse>


              </Container>
            </Navbar>
          </Col>
        </Row>


        
      </Container>

    </>
  )
}
