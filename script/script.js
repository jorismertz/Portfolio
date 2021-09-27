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