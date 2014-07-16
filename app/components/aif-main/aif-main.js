(function () {
    'use strict';
    
    /*global Polymer*/
    Polymer('aif-main', {
        toggle: function () {
            this.$.drawerPanel.togglePanel();
        }
    });
}());