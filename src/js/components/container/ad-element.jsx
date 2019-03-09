import React, { Component } from "react";
import ReactDOM from "react-dom";

class AdElement extends Component {
    constructor(props) {
      super(props);
    }

    _getClasses(){
        return `horizontal-${this.props.config.position.horizontal} vertical-${this.props.config.position.vertical}`;
    }

    render() {
        if (this.props.config.element === 'button'){
            return (<button className={this._getClasses()} onClick={this.props.onClick}>
                        {this.props.config.text}
                    </button>);
        } else {
            return null;
        }
    }
  }
  export {AdElement};