/*

MODEL CV
===========

It represents the CV model

*/

define(
	[
		'backbone'

	],

	function(Backbone)
	{
	
		var CvModel = Backbone.Model.extend({
			initialize:function(){
                (this.has('id')) ? null : this.set({id:_.uniqueId('cv_')});
            }
 		});


		return CvModel;
	}

);