import React, { Component } from "react";
import ReactDOM from "react-dom";
import {AdElement} from './ad-element.jsx';
import {EVENTS} from '../../core/events';

/**
 * A ad from the type of 'pause'
 * This ad pauses the video on a certain time for a configured time. Then jumps to a certain point in the video
 */
class PauseAd extends Component {
    constructor(props) {
      super(props);
      this._pauseTimeout = null;
      this.state = {
          show: false,
          clicked: false
      }
      this._videoElement = this.props.videoElement;
      this._videoElement.addEventListener(EVENTS.TIME_UPDATE, this._onTimeUpdate.bind(this));
    }
  
    _onTimeUpdate(){
        if (this.state.clicked) {
            return;
        }
        const time = this._videoElement.currentTime;
        if (Math.round(time) === this.props.config.pauseTime && !this._videoElement.paused) {
            this._videoElement.pause();
            this._pauseTimeout = setTimeout(() => {
                this._videoElement.currentTime = 21;
                this._videoElement.play();
                this.setState({show: false});
            } , this.props.config.puaseLength * 1000);
            this.setState({show: true});
        }
    }

    _onClick(){
        this.setState({clicked: true});
        if (this._pauseTimeout) {
            clearTimeout(this._pauseTimeout);
        }
        this._videoElement.play();
    }

    render() {
        if (this.state.show && !this.state.clicked) {
            return (<AdElement config={this.props.config} onClick={this._onClick.bind(this)}></AdElement>);
        } else {
            return null;
        }
    }
  }
  
  export {PauseAd};