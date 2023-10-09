import React from 'react';
import './Navbar.css';

import { Nav, Navbar} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AppNavbar() {

  return (
    
    <Navbar collapseOnSelect expand="lg" className="navbar-color" variant="dark">
      <Navbar.Brand href="/login" className='logo'>
        WorkWord
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='burger-button'/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto navigation-container">
          <Nav.Link href="/Profile" className='nav-link'>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
  );
}
