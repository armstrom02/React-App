import React from 'react';
import Person from './Person/Person'

const Persons = (props) => props.person.map((per, index) => {
    return <Person
        key={per.id}
        name={per.name}
        age={per.age}
        remove={(index) => props.remove(index)}
        change={(event) => props.change(event, per.id)}
    />
})

export default Persons;