import React, { Component } from "react";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

//CODE FOR SEARCH BAR WILL GO IN THIS FUNCTION
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    // If both fields are blank, the user will be asked to fill at least one of them.
    if (!this.state.firstName && !this.state.lastName) {
      alert("Fill out a first or last name please!");
    } else {
      // Code for processing the search input will go here!!! It will probably be a filter method.
      alert(`Thank you for searching`);
      
    }

    // This is resetting the state, might have to take it out
    this.setState({
      firstName: "",
      lastName: "",
    });
  };
  

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;