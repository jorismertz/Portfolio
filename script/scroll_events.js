// contact, about, services

function discoverButton() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#event_container").offset().top
    }, 1000);
}

$(document).ready(function (){
    $('#about').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutme_scroll").offset().top
        }, 1000);
    });

    $('#mwbutton').click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#event_container").offset().top
        }, 1000);
    });
});