/*
function fetchData(user) {
    return $.ajax({
        url: `https://www.instagram.com/${user}/`,
        type: 'GET'
    })
}

async function getPosts() {
    try {
        let res = fetchData('jorisportfoliox')
        let userData = res.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
        console.log(userData);
    } catch(error) {
        console.log(error);
    }
}
*/
function viewPortfolio(id) {
    let item = items[id];
    console.log(item.images.length)
    $('.portfolio_header').text(item.name);
    $('.portfolio_description').text(item.description);
    $('.portfolio_link').attr('href', item.instagram_link)
    $('.portfolio_images').html('')
    if (item.images.length == 1) {
        $('.portfolio_images').append(`
        <div class="img_wrapper singular_img">
            <img src="${item.images[0]}">
        </div>
        `)
    } else {
            item.images.forEach(img => {
            $('.portfolio_images').append(`
            <div class="img_wrapper">
                <img src="${img}">
            </div>
            `)
        });
    }
    $('.portfolio_viewer').css('display', "block")
};

/*
Portfolio laad functie die niet werkt.
is niet voor objects maar multidimesionele arrays.

function loadPortfolio() {
    for (let a = 0; a < Object.keys(items).length; a++) {
        console.log(parseInt(a))
        console.log(items[parseInt(a)])
        $('.work_container').append(`
            <div class="work_item">
                <img src="${items[parseInt(a)].images[0]}">
            </div>
        `)
    }
}
*/


// deze werkt wel
function loadPortfolio() {
    for (const item in items) {
        $('.work_container').append(`
        <div class="work_item">
            <img onclick="viewPortfolio(${item})" src="${items[item].images[0]}">
        </div>
    `)
    }    
}

$(document).ready(() => {
    // Close on click of background
    $('.bg').on("click", function () { $('.portfolio_viewer').css('display', 'none'); });
    // Close on click of exit button
    $('.exit_button').on("click", function () { $('.portfolio_viewer').css('display', 'none'); });

    loadPortfolio();
})

var carrousel_current = 1;
var leftSrc;

function carrousel() {
    if (parseFloat(carrousel_current) - 1 == 0) leftSrc = Object.keys(items).length;
    else leftSrc = carrousel_current - 1;

    $('.left_showcase').find('img').attr("src", items[leftSrc].images[0])
    $('.showcase').find('img').attr("src", items[carrousel_current].images[0])
    $('.right_showcase').find('img').attr("src", items[carrousel_current + 1].images[0])
    if (carrousel == 13) carrousel = 0;
    carrousel_current++;
}