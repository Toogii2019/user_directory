import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class Nav extends Component {

  render() {
    return (
      <searchProvider>
      <ReactBootstrap.Navbar bg="light" variant="light">
        <ReactBootstrap.Navbar.Brand href="#home">User's Directory</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Form inline>
        </ReactBootstrap.Form>
      </ReactBootstrap.Navbar>
      </searchProvider>
    )
  }
}

export default Nav;
