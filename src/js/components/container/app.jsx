import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Video} from './video.jsx';
import {AdsOverlay} from './ads-overlay.jsx';
import {Loader} from './loader.jsx';
import {NetworkEngine} from './../../core/network-engine.js'
import {AnalyticsFactory} from '../../core/factory-analytics'
import * as baseConfig from '../../base-config.json'

/**
 * main application component
 */
class App extends Component {
    constructor() {
      super();
      this._config = baseConfig.default;
      this.state = {
        loading: true,
        videoElement: null
      }
      this._networkEngine = new NetworkEngine();
    }

    _onVideoElementLoad(videoElement) {
      this.setState({videoElement});
      this._analytics = new AnalyticsFactory(this._config.analytics, videoElement);
    }

    _getAppConfig() {
      return this._networkEngine.fetch(this._config.dataUrl);
    }

    _setAppConfig(config) {
      this._config.video = config.video;
      this._config.ads = config.ads;
      this._config.analytics = config.analytics;
      this.setState({'loading': false});
      
    }

    componentDidMount() {
      this._getAppConfig().then(config => this._setAppConfig(config));
    }

    render() {
      return (
        <div className='videoContainer'>
            <Loader loading={!this.state.loading}/>
            {this._config.video 
              ? <Video config={this._config.video} onVideoElementLoad={this._onVideoElementLoad.bind(this)}/>
              : null}
            {this.state.videoElement 
              ? <AdsOverlay config={this._config.ads} videoElement={this.state.videoElement}/>
              : null}
        </div>
      );
    }
  }
  
  export {App};