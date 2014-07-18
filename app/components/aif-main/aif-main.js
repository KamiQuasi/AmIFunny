(function () {
    'use strict';
    
    /*global Polymer*/
    Polymer('aif-main', {
        users: [
            'Kyle Buchanan',
            'Luke Dary',
            'Pat Dungan',
            'Roxanne Hoover',
            'James Tysinger',
            'Bill Rowland',
            'Mike Roberto',
            'Kristy Buchanan',
            'David Rouse',
            'Ryan Migdal'
        ],
        
        toggle: function () {
            this.$.drawerPanel.togglePanel();
        },
        
        rate: function () {
            this.fire('transition', {
                page: 'rate'
            });
        }
    });
}());