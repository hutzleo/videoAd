import * as serverData from './../server-data.json'

class NetworkEngine {
    constructor(){
    }

    fetch(url) {
        return new Promise(resolve => {
            resolve(serverData.default);
        })
    }
}

export {NetworkEngine}