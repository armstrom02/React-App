import React from 'react';




const Cockpit = (props) => {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    }


    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red')
    }
    if (props.persons.length <= 1) {
        classes.push('bold')
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>this is really working</p>
            <button style={style} onClick={props.toggle}>Switch</button>
            <button onClick={props.login}>Login </button>
        </div>
    );
}

export default Cockpit;