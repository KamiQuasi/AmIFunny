(function () {
    'use strict';
    
    Polymer('aif-profile-image', {
        ready: function () {
            this.addEventListener('something', function () {
                console.log('Profile Image');
            });
        }
    });
}());