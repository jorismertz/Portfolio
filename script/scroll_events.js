// contact, about, services

$(document).ready(function (){
    $('#about').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutme_scroll").offset().top
        }, 1000);
    });
});