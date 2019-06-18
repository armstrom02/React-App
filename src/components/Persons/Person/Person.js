import React, { Component } from 'react';
import './Person.css';
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types';



class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
        // console.log();
    }

    render() {
        return (
            <Aux>
                <p onClick={this.props.remove}>I'm a {this.props.name} and i am {this.props.age} year's old.</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.change} />
            </Aux>
        );
    }
}


Person.propTypes = {
    remove: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
}

export default withClass(Person, 'Person');