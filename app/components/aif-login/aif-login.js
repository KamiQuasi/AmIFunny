(function () {
    'use strict';
    
    /*global Polymer, Event*/
    Polymer('aif-login', {
        ready: function () {
            var that = this;
            
            this.$.loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                
                that.fire('loggedIn');
            });
        },
        submit: function () {
            var event = new Event('submit');
            this.$.loginForm.dispatchEvent(event);
        }
    });
}());