import React, { Component } from "react";
import ReactDOM from "react-dom";
import {AdElement} from './ad-element.jsx';
import {EVENTS} from '../../core/events';
import {env} from '../../core/utils';

class ClickAd extends Component {
    constructor(props) {
      super(props);
      this._pauseTimeout = null;
      this.state = {
          show: false
      }
      this._videoElement = this.props.videoElement;
      this._videoElement.addEventListener(EVENTS.TIME_UPDATE, this._onTimeUpdate.bind(this));
    }
  
    _onTimeUpdate(){
        if (this.state.clicked){
            return;
        }
        const time = this._videoElement.currentTime;
        if (Math.round(time) >= this.props.config.showTime){
            this.setState({show: true});
        }
    }

    _onClick(){
        if (env.isIOS()){
          window.open(this.props.config.urls.ios ,'_blank');
        } else if (env.isAndroid()) {
          window.open(this.props.config.urls.android,'_blank');
        } else {
          window.open(this.props.config.urls.ios,'_blank');
        }
      }

    render() {
        if (this.state.show) {
            return (<AdElement config={this.props.config} onClick={this._onClick.bind(this)}></AdElement>);
        } else {
            return null;
        }
    }
  }
  export {ClickAd};