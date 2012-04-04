dsfln.collections.Tweets = Backbone.Collection.extend({
    url: "http://search.twitter.com/search.json?q=WhenIWasLittle",
    model: dsfln.models.Tweet,

    sync: function(method, model, options) {
        options.dataType = 'jsonp';
        return Backbone.sync(method, model, options);
    },

    parse: function(response) {
        this.next_page = response.next_page;
        this.refresh_url = response.refresh_url;
        return response.results;
    }


});
