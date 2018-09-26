$(document).ready(function () {
    var pageURL = window.location.href.substr(window.location.href
        .lastIndexOf("/") + 1).replace('.html', '');
    setTimeout(function () {
        $("#" + pageURL).addClass("current");
        if (pageURL.match(/sdg*/)){
            $("#sdgs").addClass("current");
        }
        if (pageURL.match(/asp*/)){
            $("#asps").addClass("current");
        }
    });
});