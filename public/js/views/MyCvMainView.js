define(
	[
		'jquery',
		'underscore',
		'backbone',
		'handlebars',
		'text!templates/cvMainView.html'
	],

	function($,_,Backbone,handlebars,Template)
	{
		var MyCvMainView = Backbone.View.extend({

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
				this.$el.html(this.template(this.model.toJSON()));
			}
		});

		return MyCvMainView;
	}
);