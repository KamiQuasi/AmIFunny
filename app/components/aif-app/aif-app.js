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
                
                this.$.pages.selected = 'rate';
            });
            
            if (!history.state) {
                history.pushState({
                    page: 'main'
                });
            }
            
            window.onpopstate = function () {
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