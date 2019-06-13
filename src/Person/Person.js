import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and i am {props.age} year's old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} />
        </div>
    );
}

export default person;