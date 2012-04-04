dsfln.routers.space = Backbone.Router.extend({

    routes: {
        "" : "begin"
    },

    initialize: function() {
        _.bindAll(this, "begin");
        /* Init Sub-Views Here */
        this.app = new dsfln.views.Loop();
    },

    begin: function() {
        console.log('[SPACE] Starting..');
        this.app.begin();
    }
});
