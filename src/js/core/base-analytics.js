import {EVENTS} from './events';

/**
 * Base class for the analytics.
 */
class BaseAnalytics {
    constructor(config, videoElement) {
        this._videoElement = videoElement;
        this._config = config;
        this._bindEvents();
    }

    _bindEvents() {
        this._videoElement.addEventListener(EVENTS.PLAYING, this._onPlaying.bind(this));
        this._videoElement.addEventListener(EVENTS.ENDED, this._onEnded.bind(this));
    }

    _onPlaying() {
        console.log('implement _onPlaying');
    }

    _onEnded() {
        console.log('implement _onEnded');
    }

    _sendStats(url) {
        this._createTrackingImage(url);
    }

    _createTrackingImage(url) {
        const image = document.createElement('img');
        image.src = url;
        image.height = '1';
        image.width = '1';
        return image;
    }

    _unbindAll() {
        this._videoElement.removeEventListener(EVENTS.PLAYING, this._onPlaying.bind(this));
        this._videoElement.removeEventListener(EVENTS.ENDED, this._onEnded.bind(this));
    }

    destroy() {
        this._unbindAll();
    }
}

export {BaseAnalytics}