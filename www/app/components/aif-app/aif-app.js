(function () {
    'use strict';
    
    /*global Polymer*/
    Polymer('aif-app', {
        ready: function () {
            this.addEventListener('loggedIn', function (event) {
                this.$.pages.selected = 'main';
                history.pushState({
                    page: 'main'
                });
            });
            
            /*
             * list for transition events. each event should pass
             * a page object with a page name
             */
            this.addEventListener('transition', function (event) {
                history.pushState({
                    page: event.detail.page
                });
                
                if (event.detail.page === 'rate') {
                    this.$.rate.starting = 0;
                    this.$.rate.rating = 0;
                }
                
                this.$.pages.selected = event.detail.page;
            });
            
            if (!history.state) {
                history.pushState({
                    page: 'login'
                });
            }
            
            window.onpopstate = function (event) {
                /*
                 * check to see if there is a page to go back to,
                 * if there is, go to it
                 */
                if (history.state) {
                    this.$.pages.selected = history.state.page;
                    return;
                }
                
                /*
                 * no page to go back to, use the normal back method
                 */
                history.back();
            }.bind(this);
        }
    });
}());