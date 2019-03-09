import {MockyAnalytics} from './mocky-analytics';

/**
 * Creates all the analytics that are configured for this video
 */
class AnalyticsFactory {
    constructor(configs, videoElement) {
        this.analytics = [];
        configs.forEach(config => {
            if (config.type === 'mocky') {
                this.analytics.push(new MockyAnalytics(config, videoElement));
            }
        })
    }

    destroy() {
        this.analytics.forEach(analytics => analytics.destroy());
    }
}

export {AnalyticsFactory}