import React from "react";
// import "./styles.css";
import { Nav, Navbar,Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Bat from "./bat.jpg"
export default function Navbar() {
  return (
   
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <Image src={Bat} className="logo" />
      Weird Music 
    
      </Navbar.Brand> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#Rock">Rock</Nav.Link>
          <Nav.Link href="#Hip-Hop">Hip-Hop</Nav.Link>
          <Nav.Link href="#Pop">Pop</Nav.Link>
          <Nav.Link href="#Jazz">Jazz</Nav.Link>
          <Nav.Link href="#Electronic">Electronic</Nav.Link>
          <Nav.Link href="#Latin">Latin</Nav.Link>
          <Nav.Link href="#Metal">Metal</Nav.Link>
         </Nav>
        <Nav>
        <Nav.Link eventKey={2} href="">
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}