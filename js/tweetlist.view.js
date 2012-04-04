dsfln.views.TweetList = Backbone.View.extend({
    tagName: 'ul',


    initialize: function() {
        _.bindAll(this,
            "render",
            "handleSuccess",
            "renderTweet");

        this.collection = new dsfln.collections.Tweets();
        this.collection.on('reset', this.begin);
    },

    render: function() {
        console.log('[LIST] Rendering..');
        $(this.el).empty();
        this.dfd = this.collection.fetch({add: true, success: this.handleSuccess});
        return this;
    },

    handleSuccess: function() {
        console.log('[LIST] Fetch Success.. Rendering..');
        /* Re-render list */
        this.collection.each(this.renderTweet);
        return this;
    },

    renderTweet: function(tweet) {
        /* Render One Tweet */
        var item = new dsfln.views.Tweet({model: tweet});
        $(this.el).prepend(item.render().el);
        return this;
    }


});
