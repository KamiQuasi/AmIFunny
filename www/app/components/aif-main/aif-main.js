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
        },
        
        profile: function() {
            this.fire('transition', {
                page: 'profile'
            });
        },
        
        domReady: function () {
            var lgProfileImages = this.$.panel.querySelectorAll('.profile-img-lg'),
                i = 0,
                length = lgProfileImages.length,
                maxHeight  = lgProfileImages[0].parentElement.offsetHeight;
            
            for (i; i < length; i += 1) {
                lgProfileImages[i].style.maxWidth = maxHeight + 'px';
                lgProfileImages[i].style.maxHeight = maxHeight + 'px';
            }
        }
    });
}());