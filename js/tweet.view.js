dsfln.views.Tweet = Backbone.View.extend({
    tagName: 'li',
    className: 'box orient_h',

    template: _.template($('#tweet-item').html()),

    initialize: function() {
        _.bindAll(this, 'render');
    },
    
    render: function() {
        console.log('[TWEET] this.model => ', this.model);
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});
