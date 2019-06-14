import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: 'sdsf', name: "vivek", age: 25 },
      { id: 'sfsdff', name: "rahul", age: 28 },
      { id: 'sfdsfd', name: "ankur", age: 65 }
    ],
    showPerson: false
  }

  togglePersonHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }


  changeNameHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(ele => ele.id === id);

    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;

    const personList = this.state.persons;
    personList[personIndex] = person;

    this.setState({
      persons: personList
    })
  }

  deletePersonHandler = (index) => {
    let personList = [...this.state.persons];

    personList.splice(index, 1);

    this.setState({
      persons: personList
    });
  }

  render() {


    let person = null;

    if (this.state.showPerson) {
      person =
        (<div>
          <Persons
            person={this.state.persons}
            remove={(index) => this.deletePersonHandler(index)}
            change={(event, id) => this.changeNameHandler(event, id)}
          />
        </div>)

      // style.backgroundColor = 'red'
    }



    return (
      <div className="App">
        <Cockpit toggle={this.togglePersonHandler} persons={this.state.persons} />
        {person}
      </div>
    );

  }

}
export default App;
