(function () {
    'use strict';
    
    Polymer('aif-back-button', {
        goBack: function () {
            history.back();
        }
    });
}());