define(
	[
		'jquery',
		'underscore',
		'backbone',
		'handlebars',
		'Cvs',
		'text!templates/cvListView.html'
	],

	function($,_,Backbone,handlebars, Cvs, Template)
	{
		var CvListView = Backbone.View.extend({

			template : handlebars.compile(Template),

			el: ".container-fluid",

			attributes: function(){
             	return { 
                 	// id: 'cvMainView',
                 	// style: 'position: absolute;'
             	}
          	},

			initialize: function()
			{
				this.render();
			},
			render: function(){
				var that = this;
				this.collection = new Cvs();
                this.collection.fetch({
                    success: function() {
                    	DEBUG("that.collection.models ", that.collection.toJSON());
						that.$el.append(that.template({ cvs: that.collection.toJSON() }));
                    }
                })
			}
		});

		return CvListView;
	}
);