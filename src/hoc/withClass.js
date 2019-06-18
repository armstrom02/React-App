import React, { Component } from 'react'

const withClass = (WarrapedComponent, className) => {

    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WarrapedComponent {...this.props} />
                </div>
            )
        }

    }
}

export default withClass;