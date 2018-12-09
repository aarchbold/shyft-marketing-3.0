function getParam(name) {
    SCH = document.location.search;
    if(window['W3T'] && (W3T['MORE_ARGS'] != "")) {
        SCH += "&" + W3T['MORE_ARGS'];
    }
    SCH = "?&" + SCH.substring(1,SCH.length);
    // alert('SCH = ' + SCH);
    var start = SCH.indexOf("&" + name+"=");
    var len = start+name.length+2;
    if ((!start) && (name != SCH.substring(0,name.length))) return("");
    if (start == -1) return "";
    var end = SCH.indexOf("&",len);
    if (end == -1) end = SCH.length;
    // alert('finished getting parm ' + name);
    return unescape(SCH.substring(len,end));
}


$.fn.handleTextLink = function() {
    var $container = $(this),
        $button = $('.button', $container),
        $form = $('input', $container);
    
    $button.click(function(e){
        alert('TODO: add functionality for sending text links')
    });
}

$(function(){
    console.log($);
    console.log('hello');
    
    $('#downloadLinkForm').handleTextLink();
});