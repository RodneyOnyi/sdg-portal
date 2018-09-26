$(document).ready(function(){
    var pageURL = window.location.href.substr(window.location.href
        .lastIndexOf("/") + 1).replace('.html','');
    setTimeout(function () {
        $("#"+pageURL).addClass("current");
    },100);
});