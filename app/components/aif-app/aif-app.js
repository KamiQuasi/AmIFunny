(function () {
    'use strict';
    
    /*global Polymer*/
    Polymer('aif-app', {
        ready: function () {
            this.addEventListener('loggedIn', function (event) {
                this.$.pages.selected = 1;
            });
        }
    });
}());