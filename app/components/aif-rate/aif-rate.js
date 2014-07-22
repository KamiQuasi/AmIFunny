(function () {
    'use strict';
    
    Polymer('aif-rate', {
        starting: 0,
        rating: 0,
        
        ready: function () {
            this.addEventListener('something', function () {
                console.log('in here');
            });
        },
        
        submit: function () {
            var that = this;
            
            this.$.overlay.toggle();
            
            setTimeout(function () {
                that.$.overlay.toggle();
                
                that.fire('transition', {
                    page: 'main'
                });
            }, 2000);
        },
        
        cancel: function () {
            history.back();
        }
    });
}());