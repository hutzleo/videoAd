import {EVENTS} from './events';
import {BaseAnalytics} from './base-analytics';

class MockyAnalytics extends BaseAnalytics{
    constructor(config, videoElement){
        super(config, videoElement);
        this._firstPlay = true;
    }

    _onPlaying() {
        if (this._firstPlay){
            this._sendStats(this._config.startPlay);
            this._firstPlay = false;
        }
    }

    _onEnded() {
        this._sendStats(this._config.endPlay);
    }
}

export {MockyAnalytics}