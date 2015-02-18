define(
    [
        'underscore',
        'backbone',
        'MyCvMainView',
        'Cvs',
        'CvListView'

    ],

    function(_, Backbone, MyCvMainView, Cvs, CvListView) {
        var AppRouter = Backbone.Router.extend({

            routes: {
                '': 'home',
                'mycv/:id': 'findCv'
            },

            home: function() {
                DEBUG("home  ", this)
                var cvList = new CvListView();
                this.mycv.debug("ok  ok");
                // DEBUG(this, "home");


                //onFetch

                // var mainCvView = new MyCvMainView({
                //    model: cvModel
                // });
            },
            findCv: function(id) {
                console.log("find cv");
                var that = this;
                cvsCollection = new Cvs();
                cvsCollection.fetch({
                    success: function() {
                        DEBUG("that.collection.models ", cvsCollection.toJSON());
                        cvsCollection.each(function(cv) {
                            if(cv.get('_id') === id){
                              var cvMainView = new MyCvMainView({ model: cv});                           
                            }
                        });
                    }
                })
            }

        });
        return AppRouter;
    });