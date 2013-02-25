jQuery(function() {
    // Remove overlay on window load event
    
    $(window).load(function(){
        $('.doc-loader').fadeOut('slow');
    });
    
    try {
        if (window.PIE) {
            jQuery('.rounded, input, textarea').each(function() {
                PIE.attach(this);
            });
        }        	
    } catch(e){}
        
    jQuery('#slider').nivoSlider({
        effect: 'fade',
        slices: 5,
        controlNav: false,                                
        animSpeed: 1000,
        pauseTime: 5000
    });
    
    addTweets();
     
    $('#subscribe').attachHint('Type your email here for a download reminder');
    
    $(document).bind('reveal.facebox', function() {
        $('div.popup input#subscriberEmail.left').attachHint('Enter your email here for a reminder!');
        
        $('div.popup #name').attachHint('Your name:');
        $('div.popup #email').attachHint('E-mail address:');
        $('div.popup #subject').attachHint('Subject:');
        $('div.popup #message').attachHint('Message:');                 
    });
	
    jQuery('a[rel*=facebox]').facebox({
        opacity : 0.9
    });       
});

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------
var ResetInput = function(){
    jQuery('input, textarea').each(function() {
        jQuery(this).val('').text('');
    });
};

var StringFormat = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var regExpression = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(regExpression, arguments[i + 1]);
    }
    return s;
}

var ClosePopupWindow = function()
{
    jQuery(document).trigger('close.facebox');
}

var SendMail = function(){
    var isValid = true;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test($('div.popup #email').val()) || $('div.popup #email').val() == ""){
        isValid = false;
        alert('Your email is not in valid format');
    }
    if(isValid){
        var params = {
            'action'    : 'SendMessage',
            'name'      : $('div.popup #name').val(),
            'email'     : $('div.popup #email').val(),
            'subject'   : $('div.popup #subject').val(),
            'message'   : $('div.popup #message').val()
        };
        $.ajax({
            type: "POST",
            url: "php/mainHandler.php",
            data: params,
            success: function(response){
                if(response){
                    var responseObj = jQuery.parseJSON(response);
                    if(responseObj.ResponseData)
                    {
                        $('div.popup #messageStatus').text(responseObj.ResponseData);
                        $('div.popup #messageStatus').removeClass('red-label').addClass('green-label');
                    }
                }
                ResetInput();
                $('#submitButton').removeAttr('disabled');
            },
            error: function (xhr, ajaxOptions, thrownError){
                //xhr.status : 404, 303, 501...
                var error = null;
                switch(xhr.status)
                {
                    case "301":
                        error = "Redirection Error!";
                        break;
                    case "307":
                        error = "Error, temporary server redirection!";
                        break;
                    case "400":
                        error = "Bad request!";
                        break;
                    case "404":
                        error = "Page not found!";
                        break;
                    case "500":
                        error = "Server is currently unavailable!";
                        break;
                    default:
                        error ="Unespected error, please try again later.";
                }
                if(error){
                    $('div.popup #messageStatus').text('Sending failed!');
                    $('div.popup #messageStatus').removeClass('green-label').addClass('red-label');
                    alert(error);
                }
            }
        });
    }
};

var subscribe = function()
{
    var inputEmail = $('input#subscribe').val();
    var isValid = true;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(inputEmail) || inputEmail == ""){
        isValid = false;        
        $('#subscribeMesage').text("Your email is not in valid format!");
        $('#subscribeMesage').removeClass('green-label').addClass('red-label');
    }
    if(isValid){
        var params = {
            'action'    : 'Subscribe',
            'email'     : inputEmail
        };
        $.ajax({
            type: "POST",
            url: "php/mainHandler.php",
            data: params,
            success: function(response){
                if(response){
                    var responseObj = jQuery.parseJSON(response);
                    if(responseObj.ResponseData)
                    {
                        $('#subscribe').val('');
                        $('#subscribeMesage').text("Thanks, we will send you a reminder!");
                        $('#subscribeMesage').removeClass('red-label').addClass('green-label');
                    }
                }
            }
        });
    }
};