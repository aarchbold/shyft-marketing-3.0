// function getParam(name) {
//     SCH = document.location.search;
//     if(window['W3T'] && (W3T['MORE_ARGS'] != "")) {
//         SCH += "&" + W3T['MORE_ARGS'];
//     }
//     SCH = "?&" + SCH.substring(1,SCH.length);
//     // alert('SCH = ' + SCH);
//     var start = SCH.indexOf("&" + name+"=");
//     var len = start+name.length+2;
//     if ((!start) && (name != SCH.substring(0,name.length))) return("");
//     if (start == -1) return "";
//     var end = SCH.indexOf("&",len);
//     if (end == -1) end = SCH.length;
//     // alert('finished getting parm ' + name);
//     return unescape(SCH.substring(len,end));
// }


$.fn.handleTextLink = function() {
    var $container = $(this),
        $formContainer = $('.footer-download-link__form--show', $container),
        $button = $('.button', $container),
        $spinner = $('#newsletterSpinner', $container),
        $form = $('input', $container),
        $success = $('.-success', $container),
        $fail = $('.-error', $container),
        linkData = {
            tags: [],
            channel: 'Website',
            feature: 'TextMeTheApp',
            data: {
              'foo': 'bar'
            }
        },
        options = {};
    
    var submitting = function() {
        $button.hide();
        $spinner.css('display','inline-block');
        $form.prop('disabled',true);
        $success.hide();
        $fail.hide();
    }

    var complete = function(hasError) {
        if (hasError) {
            $spinner.hide();
            $form.prop('disabled',false);
            $fail.show();
            $button.show();
        } else {
            $formContainer.hide();
            $success.show();
        }
    }
    
    var callback = function(err, result) {
        if (err) {
            complete(true);
        }
        else {
            complete(false);
        }
      };

    $button.click(function(e){
        submitting();
        branch.sendSMS($form.val(), linkData, options, callback);
    });

}

$(function(){
    $('#downloadLinkForm').handleTextLink({
        dots: true
    });
});