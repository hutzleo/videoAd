import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {AdElement} from './ad-element.jsx';
import {EVENTS} from '../../core/events';
import {env} from '../../core/utils';
import propTypes from 'prop-types';

/**
 * Represents an ad that will be shown between 2 time slots.
 * A click on the ad will open a link
 */
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
  
    _onTimeUpdate() {
        if (this.state.clicked) {
            return;
        }
        const time = this._videoElement.currentTime;
        if (Math.round(time) >= this.props.config.startTime && Math.round(time) <= this.props.config.endTime){
            this.setState({show: true});
        } else {
            this.setState({show: false});
        }
    }

    _onClick() {
        if (env.isIOS()) {
            window.open(this.props.config.urls.ios ,'_blank');
        } else if (env.isAndroid()) {
            window.open(this.props.config.urls.android,'_blank');
        } else {
            window.open(this.props.config.urls.ios,'_blank');
        }
      }

    render() {
        if (this.state.show) {
            return (
                <AdElement config={this.props.config} onClick={this._onClick.bind(this)}></AdElement>
            );
        } else {
            return null;
        }
    }
}

export {ClickAd};

ClickAd.propTypes = {
    config: propTypes.object.isRequired,
    onClick: propTypes.func,
    videoElement: propTypes.instanceOf(Element).isRequired
}