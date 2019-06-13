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
    let personIndex = this.state.person.findIndex(ele => ele.id = id);
    console.log(event.target.value);
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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '12px',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if (this.state.showPerson) {
      person =
        (<div>
          {
            this.state.person.map((per, index) => {
              return <Person
                key={per.id}
                click={() => this.deletePersonHandler(index)}
                changeName={(event) => this.changeNameHandler(per.id)}
                name={per.name}
                age={per.age} />
            })
          }
        </div>)
    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch</button>
        {person}
      </div>
    );
  }

}
export default App;
