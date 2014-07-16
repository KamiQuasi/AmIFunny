(function () {
    'use strict';
    
    /*global Polymer*/
    Polymer('aif-app', {
        ready: function () {
            this.addEventListener('loggedIn', function (event) {
                this.$.pages.selected = 1;
            });
            
            var dummyState = {
                app: 'aif'
            };
            
            if (!history.state) {
                history.pushState(dummyState, '');
            }
            
            window.onpopstate = function () {
                console.log('in here');
                
                history.pushState(dummyState, '');
            }.bind(this);
        }
    });
}());