dsfln.views.Loop = Backbone.View.extend({
    el: ".content",

    initialize: function() {
        _.bindAll(this, 'begin');

        this.list = new dsfln.views.TweetList();
    },

    begin: function() {
        console.log('[LOOP] Starting..');
        var _this = this;
        $(this.el).htmlFadeIn(this.list.render().el);
        /*setInterval(function() {
            console.log('[LOOP] Fetching new batch..');
            $(_this.el).html(_this.list.render().el);
        }, 5000);*/
    }

});
