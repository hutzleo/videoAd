import * as serverData from './../server-data.json'

/**
 * mimicking the fetch api, in the future a larger network controller that can handle errors, pulifilles (if needed) etc
 */
class NetworkEngine {
    constructor() {}

    fetch(url) {
        return new Promise(resolve => {
            resolve(serverData.default);
        })
    }
}

export {NetworkEngine}