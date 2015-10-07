"use strict";

angular.module("INTERVIEWTest", ['ui.router', 'uiGmapgoogle-maps'])
    .config([function() {
       

    }])
    .run([function() {
        var wow = new WOW({
            offset: 60, // distance to the element when triggering the animation (default is 0)
            mobile: false // trigger animations on mobile devices (default is true)
        })
        wow.init();
        //


    }]);
