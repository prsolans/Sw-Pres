presID = 2;

filepath = $('link').first().attr('href');

var path = filepath.split("Content/");

var fileDepth = path[0];

console.log(fileDepth);

var liveproducts = get_available_products();

$.each(liveproducts, function () {
    var html = '<div class="navigation-item"><img src="http://placehold.it/120x120" /><br /> <a href="' + this.filename + '.html" data-ajax="false">' + this.title + '</a></div>'
    $('.item-menu').append(html);
});

var settings = get_presentation_settings();

$.each(settings, function () {
    $('#company-name').html(this.company);
    $('#company-logo').attr('src', this.assetDir + 'logo.png');
});

$('#products-page-link').attr('href', 'products/index.html?presID=' + presID);

function get_available_products() {
    var productList = '[{ "id": 0, "title": "Product One", "filename": "one", "layout" : "three" },' +
        '{ "id": 1, "title": "Product Two","filename": "two","layout": "three" },' +
        '{ "id": 2, "title": "Product Three", "filename": "three", "layout": "three" }' +
        ']';

    return JSON.parse(productList);
}

function get_presentation_settings() {
    var settings = '[{ "id": 1, "company":"Blackhawks", "assetDir":"'+fileDepth+'Content/pres'+presID+'/" }]';

    return JSON.parse(settings);
}