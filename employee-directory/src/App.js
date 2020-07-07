import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import Table from "./components/Table";
import $ from "jquery";

function getRandomPerson() {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
};

getRandomPerson();

function App() {
  return (
    <div className="App">
    <Form></Form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
