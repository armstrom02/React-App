import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js]constructor');
    this.state = {
      persons: [
        { id: 'sdsf', name: "vivek", age: 25 },
        { id: 'sfsdff', name: "rahul", age: 28 },
        { id: 'sfdsfd', name: "ankur", age: 65 }
      ],
      showPerson: false
    }
  }

  componentWillMount() {
    console.log('[App.js]componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js]componentDidMount()');
  }

  togglePersonHandler = () => {
    this.setState((preState, props) => { return { showPerson: !preState.showPerson } })
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
    console.log('[App.js]render()');

    let person = null;

    if (this.state.showPerson) {
      person =
        (<div>
          <Persons
            persons={this.state.persons}
            remove={(index) => this.deletePersonHandler(index)}
            change={(event, id) => this.changeNameHandler(event, id)}
          />
        </div>)
    }



    return (
      <Aux>
        <Cockpit title={this.props.title} toggle={this.togglePersonHandler} persons={this.state.persons} />
        {person}
      </Aux>
    );

  }

}
export default withClass(App, 'App');
