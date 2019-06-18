import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {


    constructor(props) {
        super(props);
        console.log('[Persons.js]constructor');
    }

    componentWillMount() {
        console.log('[Persons.js]componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js]componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Persons.js]componentWillReceiveProps()', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js]shouldComponentUpdate()', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Persons.js]componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[Persons.js]componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js]render()');
        return this.props.persons.map((per, index) => {
            return <Person
                key={per.id}
                name={per.name}
                age={per.age}
                remove={(index) => this.props.remove(index)}
                change={(event) => this.props.change(event, per.id)}
            />
        })
    }

}

export default Persons;