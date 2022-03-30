var language = navigator.language;

/* Functions  */

function setLanguage(lang) {
    let settext = function (name) {
        $('#abt_text').html(`<zero-md src="about/` + name + `.md"></zero-md>`);
    };
    /*
    if (lang !== "en") {
        settext(lang);
    } else {
        settext('en');
    }
    */

    if (lang.includes("nl")) settext('nl')
    else settext('en')
}

function menu() {
    if($('#myLinks').css('display') == "block") {
        $('#myLinks').css('display', 'none')
        $('.active').css('width', '50px')
        $('.topnav').css('border-radius', '50%');
    } else {
        $('#myLinks').css('display', 'block')
        $('.active').css('width', '150px')
        $('.topnav').css('border-radius', '0');
    }
}

/* Execute when page is loaded in */

$(document).ready(function () {
    setLanguage(language);

    var redirectInstagram = function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
            window.location.href = "https://instagram.com/jorisportfoliox"
        }
    }
    
});
