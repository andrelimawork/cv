/*

CONTROLER VIEW
==============

*/

define(
    [
        'underscore',
        'backbone',
        'router',
    ],

    function(_, Backbone, router ) {

        var app = Backbone.View.extend({

            el: '.container',

            initialize: function(options) {

                var vent = _.extend({}, Backbone.Events);

                new router();

                Backbone.history.start();
            }

        });

        return app;
    });