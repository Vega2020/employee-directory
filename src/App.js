import React from 'react';
import './App.css';
import Form from "./components/Form";
import $ from "jquery";
import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from "react-bootstrap";
import Ajax from './components/Ajax';

// import css for react bootstrap table 2 - this might go somewhere else
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// import method from bootstrap table 2 - this enables columns that sort
import BootstrapTable from 'react-bootstrap-table-next';

// May not have to make own table component since we're importing from bootstrap
//import Table from "./components/Table";

// This is our random user data api call, wrapped in a function.
function getRandomPerson() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      // Add the random user to the randomUsers table.
      randomUsers.push(data);
      // Empty the lastGeneratedUser array.
      lastGeneratedUser.splice(0, lastGeneratedUser.length);
      // Add the random user to the lastGeneratedUser array.
      lastGeneratedUser.push(data);
      // Console log the randomUsers array.
      console.log(randomUsers);
    }
  });
};

// Invoke the random user data function to generate some random users.
getRandomPerson();

// This is a global variable to make our user data accessible to our other functions. randomUsers collects every user we've generated, while lastGeneratedUser just keeps the most recent one. Use state instead??
let randomUsers = [];
let lastGeneratedUser = [];

// This is our main app function. It is declared as a variable with fat arrows instead of a function per ES6.
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

// may have to make randomUsers a forEach function that breaks down the returned data to pass into renderUsers, so it can process them one at a time.

// This is similar to the renderPerson function but for our randomly generated users instead. Previously had "[i]" after index and before each result.
  const renderUser = (user, index) => {
    return(
      <tr key={index}>
        <td>{user[0].results[0].dob.age}</td>
        <td>{user[0].results[0].name.first}</td>
        <td>{user[0].results[0].name.last}</td>
      </tr>
    )
  }

  // This is the main return for our App.js (and in turn our whole app).
  return (
    <div className="App">

    {/* Call the Form component (which enables the search function) */}
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

<ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    {randomUsers.map(renderUser)}
  </tbody>
</ReactBootStrap.Table>

<button onClick={getRandomPerson}>
  Generate a person
</button>

    </div>
  );
}

export default App;
