define(
    [
        'underscore',
        'backbone',
        'CvModel'
    ],

    function(_, Backbone, cvModel) {

        var CvsCollection = Backbone.Collection.extend({
	    	url: "http://localhost:3000/cv",
            model: cvModel
        });
        
        return CvsCollection;
    }
);