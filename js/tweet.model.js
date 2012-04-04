dsfln.models.Tweet = Backbone.Model.extend({
    initialize: function(raw_data) {
        console.log('[MODEL] raw_data :', raw_data);
        this.sub();
    },
    sub: function() {
        console.log("Parsing message.");
        var hash_re = /#[a-zA-z0-9]+/gi,
            email_re = /@[a-zA-z0-9]+/gi,
            raw_message = this.get('text'),
            message = raw_message,
            hashtags = message.match(hash_re),
            users = message.match(email_re);

        var hash_fnct = function(hash) {
            var sub = "<a href='https://twitter.com/#!/search/%23" +hash+ "' target='_blank'>" +hash+ "</a>";
            message = message.replace(hash, sub);
        };

        var user_fnct = function(user) {
            var sub = "<a href='https://twitter.com/" +user.slice(1)+ "' target='_blank'>" +user+ "</a>";
            message = message.replace(user, sub);
        };
        
        _.each(hashtags, hash_fnct);
        _.each(users, user_fnct);

        this.set({raw_text:raw_message, text: message});
    }

});
