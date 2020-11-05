import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

function Nav() {

  return (
    <ReactBootstrap.Navbar bg="light" variant="light">
      <ReactBootstrap.Navbar.Brand href="#home">User's Directory</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Form inline>
        <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </ReactBootstrap.Form>
    </ReactBootstrap.Navbar>
  )
}

export default Nav;
