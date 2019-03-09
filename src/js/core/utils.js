const env = {
    isAndroid: function() {
        return /Android/i.test(navigator.userAgent);
      }, 
    isIOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
}

export {env}



