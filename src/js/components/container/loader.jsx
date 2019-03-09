import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * An empty placehoder for a loader cmponent
 */
class Loader extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="loader"></div>
        );
    }
}

export {Loader};