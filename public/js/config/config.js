requirejs.config({

    baseUrl: 'js',

    paths: {

        //LIBS..
        "jquery": '../bower_components/jquery/dist/jquery',
        "underscore": '../bower_components/underscore/underscore',
        "backbone": '../bower_components/backbone/backbone',
        "text": '../bower_components/text/text',
        "handlebars": '../bower_components/handlebars/handlebars',
        "bootstrap": '../bower_components/bootstrap/dist/js/bootstrap',

        //Main View of App
        app: 'app',
        router: 'router',

        //VIEWS
        MyCvMainView: 'views/MyCvMainView',   
        CvListView: 'views/CvListView',   

        //MODELS
        CvModel: 'models/CvModel',
        
        //Collections
        Cvs: 'collections/Cvs'     

    },

    shim: {

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
    
        'underscore': {
            exports: '_'
        }

    }
});