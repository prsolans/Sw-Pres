presID = 1;

filepath = $('link').first().attr('href');

var path = filepath.split("Content/");

var fileDepth = path[0];

var settings = '[{ "id": 1, "company":"Bulls", "assetDir":"'+fileDepth+'Content/pres'+presID+'/" }]';

var productList = '[{ "id": 0, "title": "Product One", "filename": "one", "layout" : "three" },' +
       '{ "id": 1, "title": "Product Two","filename": "two","layout": "three" }' +
       ']';

var liveproducts = get_available_products(productList);

$.each(liveproducts, function () {
    var html = '<div class="navigation-item"><img src="http://placehold.it/120x120" /><br /> <a href="' + this.filename + '.html" data-ajax="false">' + this.title + '</a></div>'
    $('.item-menu').append(html);
    console.log('product ' + this.id);
});

var settings = get_presentation_settings();

$.each(settings, function () {
    $('#company-name').html(this.company);
    $('#company-logo').attr('src', this.assetDir + 'logo.png');
});
$('#products-page-link').attr('href', 'products/index.html?presID=' + presID);

function get_available_products(productList) {
    return JSON.parse(productList);
}

function get_presentation_settings() {
    return JSON.parse(settings);
}