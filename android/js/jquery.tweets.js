var addTweets = function()
{	    
    jQuery('.tweets ul').empty();
    jQuery('.tweets ul').each(function(index, obj){
        jQuery.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?screen_name='+twitterName+'&include_rts=true&count=5&callback=?', function(data) {
            jQuery.each(data, function(index, twitt){
                var twitterTemplate = '<li>' 
                + '<p class="content">'
                +    '<a href="http://twitter.com/#!/{0}/status/{1}" target="_blank">'
                +        '{2}'
                +    '</a>'
                + '</p>'
                + '<span class="date">{3}</span>'
                + '</li>';

                jQuery(obj).append(StringFormat(twitterTemplate, twitterName, twitt.id_str, twitt.text, jQuery.format.date(twitt.created_at, "dd MMM yyyy HH:mm:ss")));
            });            
        });
    });
    
    scrollTweets();
};

var scrollTweets = function(){
    jQuery('.tweets').vTicker({
        speed: 1000,
        pause: 5000,
        animation: 'fade',
        mousePause: false,
        height: 80,
        showItems: 1
    });
}