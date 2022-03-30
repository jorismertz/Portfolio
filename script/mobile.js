$(window).on('resize', function(event){
    var windowSizeWide = $(window).width() < 950;
    if (windowSizeWide == true) {
        var window_width = $(window).width() - $('#object').width();
        var document_height = $(document).height() - $(window).height();

        $(function () {
            $(window).scroll(function () {
                var scroll_position = $(window).scrollTop();
                var object_position_left = window_width * (scroll_position / document_height);
                $('#object').css({
                    'left': object_position_left
                });
            });
        });
    }
}).trigger('resize');

var window_width = $(window).width() - $('.media_qoute').width();
var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);

        $('.media_qoute').css({
            'left': + object_position_left / 1.5 + "px"
        });
    });
});

