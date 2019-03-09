import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {EVENTS} from '../../core/events';
import {ClickAd} from './click-ad.jsx';
import {PauseAd} from './pause-ad.jsx';
import propTypes from 'prop-types';

/**
 * Ads controller, holds all the ads that will be shown.
 */
class AdsOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: -1
        }
        this._videoElement = props.videoElement;
        this._bindEvents();
    }

    _bindEvents() {
        this._videoElement.addEventListener(EVENTS.TIME_UPDATE, this._onTimeUpdate.bind(this));
    }

    _onTimeUpdate() {
        this.setState({time: this._videoElement.currentTime});
    }

    _renderAds() {
        return this.props.config.map(config => {
            switch (config.adType) {
                case 'click':
                    return (<ClickAd key={config.id} config={config} videoElement={this._videoElement}/>);
                case 'pause':
                    return (<PauseAd key={config.id} config={config} videoElement={this._videoElement}/>);
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {this._renderAds()}
            </React.Fragment>
        );
    }
}

export {AdsOverlay};

AdsOverlay.propTypes = {
    config: propTypes.arrayOf(propTypes.object).isRequired,
    videoElement: propTypes.instanceOf(Element).isRequired
}