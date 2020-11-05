import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import $ from 'jquery';
import Row from './Row';
import { users } from './Users';
import sortIcon from '../sort-button.png';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default class Table extends React.Component {

  state = {
    sortType: 'dsc',
    usersArray: users.results,
    key: "first"
  }

  iconStyle = {
    width: "30px",
    height: "30px"
  }
  changeSort = event => {
    this.setState({key: event.target.name})
    if (this.state.sortType === 'asc') {
      this.setState({sortType:'dsc'})
    }
    else {
      this.setState({sortType:'asc'})
    }
  }

  render() {
    const {usersArray, sortType, key} = this.state;




    const sortedArray = usersArray.sort((a, b) => {
      const isReversed = (sortType === 'asc') ? 1 : -1;

      switch(key) {
        case "first-name":
          return isReversed * a.name.first.localeCompare(b.name.first)
          break;
        
        case "last-name":
          return isReversed * a.name.last.localeCompare(b.name.last)
          break;    
        case "title":
          return isReversed * a.name.title.localeCompare(b.name.title)
          break; 
        case "phone":
          return isReversed * a.phone.localeCompare(b.phone)
          break; 
        case "email":
          return isReversed * a.email.localeCompare(b.email)
          break;           
      }

      
    } )

    
    return (
      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Title <button type="button" class="btn" onClick={ this.changeSort }><img name="title" src={sortIcon} style={this.iconStyle}></img></button></th>
            <th>First Name <button type="button" class="btn" onClick={ this.changeSort }><img name="first-name" src={sortIcon} style={this.iconStyle}></img></button></th>
            <th>Last Name <button type="button" class="btn" onClick={ this.changeSort }><img name="last-name" src={sortIcon} style={this.iconStyle}></img></button></th>
            <th>Phone Number <button type="button" class="btn" onClick={ this.changeSort }><img name="phone" src={sortIcon} style={this.iconStyle}></img></button></th>
            <th>Email<button type="button" class="btn" onClick={ this.changeSort }><img name="email" src={sortIcon} style={this.iconStyle}></img></button></th>
          </tr>
        </thead>
        <tbody>


              {sortedArray.map(user =>
              <Row user={user} />
            )}

        </tbody>
      </ReactBootstrap.Table>
    );
  }
}
