import React, { Component } from "react";
import $ from "jquery";
import * as ReactBootStrap from "react-bootstrap";

class Ajax extends Component {
constructor(props) {
    super(props);
    
    this.state = {
        randomUsers: [],
    };
}//closing tag for constructor

getRandomPeople = event => {
    $.ajax({
        url: 'https://randomuser.me/api/?results=30',
        dataType: 'json',
        success: function(data) {
          // Add the random user to the randomUsers table.
          this.state.randomUsers.push(data);
          // Console log the randomUsers array.
          console.log(this.state.randomUsers);
        }
      });
    }

renderUser = (user, index) => {
        return(
          <tr key={index}>
            <td>{user[0].results[0].dob.age}</td>
            <td>{user[0].results[0].name.first}</td>
            <td>{user[0].results[0].name.last}</td>
          </tr>
        )
      }

render() {
    return (
        <div>
        <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    randomUsers.map(renderUser)
  </tbody>
</ReactBootStrap.Table>
        </div>
    )
}

}//closing tag for main class function

export default Ajax;