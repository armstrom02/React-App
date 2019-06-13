import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    person: [
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
    let personIndex = this.state.person.findIndex(ele => ele.id === id);

    const person = { ...this.state.person[personIndex] }
    person.name = event.target.value;

    const personList = this.state.person;
    personList[personIndex] = person;

    this.setState({
      person: personList
    })
  }

  deletePersonHandler = (index) => {
    let personList = [...this.state.person];
    personList.splice(index, 1);
    this.setState({
      person: personList
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let person = null;

    if (this.state.showPerson) {
      person =
        (<div>
          {
            this.state.person.map((per, index) => {
              return <Person
                key={per.id}
                name={per.name}
                age={per.age}
                click={() => this.deletePersonHandler(index)}
                changeName={(event) => this.changeNameHandler(event, per.id)}
              />
            })
          }
        </div>)

      style.backgroundColor = 'red'
    }

    let classes = [];

    if (this.state.person.length <= 2) {
      classes.push('red')
    }
    if (this.state.person.length <= 1) {
      classes.push('bold')
    }



    return (
      <div className="App">
        <h1>Hi i am React App !!</h1>
        <p className={classes.join(' ')}>this is really working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch</button>
        {person}
      </div>
    );
  }

}
export default App;
