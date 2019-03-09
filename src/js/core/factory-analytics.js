import {MockyAnalytics} from './mocky-analytics';

class AnalyticsFactory {
    constructor(configs, videoElement) {
        this.analytics = [];
        configs.forEach(config => {
            if (config.type === 'mocky'){
                this.analytics.push(new MockyAnalytics(config, videoElement));
            }
        })
    }
}

export {AnalyticsFactory}