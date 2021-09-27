var language = navigator.language;

function setLanguage(lang) {
    let settext = function (name) {
        $('#abt_text').html(`<zero-md src="about/` + name + `.md"></zero-md>`);
    };
    if (lang !== "en") {
        settext(lang);
    } else {
        settext('en');
    }
}

$(document).ready(function () {
    setLanguage(language);
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
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