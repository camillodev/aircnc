import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Menu(){
  return (
    <Navbar bg="white" expand="lg">
       <Link to={'/'}> <Navbar.Brand  to="/" ><img src={logo} alt="AirCnC"/></Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link className="no-link menu" to={'/dashboard'}>Dashboard</Link>
          <Link className="no-link menu" to={'/my-spots'}>My Spots</Link>
          <Link className="no-link menu" to={'/profile'}>Profile</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}