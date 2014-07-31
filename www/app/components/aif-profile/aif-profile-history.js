(function () {
    'use strict';
    
    Polymer('aif-profile-history', {
        ready: function () {
            this.addEventListener('something', function () {
                console.log('Profile History');
            });
        }
    });
}());