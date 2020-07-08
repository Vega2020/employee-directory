import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import $ from "jquery";
import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from "react-bootstrap";
//import Table from "./components/Table";
// May not have to make own table component since we're importing from bootstrap

// This is our random user data api call, wrapped in a function.
function getRandomPerson() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      randomUsers.push(data);
      console.log(randomUsers);
    }
  });
};

// Invoke the random user data function to generate some random users.
getRandomPerson();

// This is a global variable to make our user data accessible to our other functions.
const randomUsers = [];

const App = () => {

  // Example matrix of people
  const people = [
    {firstName: "Jamie", lastName: "Lannister", gender: "M"},
    {firstName: "Cersei", lastName: "Lannister", gender: "F"},
    {firstName: "Sansa", lastName: "Stark", gender: "F"},
    {firstName: "Gregor", lastName: "Clegane", gender: "M"},
  ]

  // Create a renderPerson variable that returns our person data as table row and column data.
  const renderPerson = (person, index) => {
    return(
      <tr key={index}>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.gender}</td>
      </tr>
    )
  }

  // This is the main return for our App.js (and in turn our whole app).
  return (
    <div className="App">

    <Form></Form>

    <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    {people.map(renderPerson)}
  </tbody>
</ReactBootStrap.Table>

<button onClick={getRandomPerson}>
  Generate a person
</button>

    </div>
  );
}

export default App;
