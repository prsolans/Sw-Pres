var pagelist = '{ "pages": [ ' +
      '{ "id": 0, "title": "Presentation Lists", "filename": "index", "layout": "home", "parent":"none", "background":"home" },' +
      '{ "id": 1, "title": "Main Menu", "filename": "pages/mainMenu", "layout": "two", "parent":"none" },' +
      '{ "id": 2, "title": "Capabilities", "filename": "pages/capabilities/index", "layout": "two", "parent":"none" },' +
      '{ "id": 3, "title": "Products", "filename": "pages/products/index", "layout": "two", "parent":"none" },' +
      '{ "id": 4, "title": "Markets", "filename": "pages/markets/index", "layout" : "two", "parent":"none" },' +
      '{ "id": 5, "title": "Mission &amp; Values", "filename": "pages/capabilities/detail", "layout": "text-video", "parent":"capabilities" },' +
      '{ "id": 6, "title": "Fittings", "filename": "pages/products/detail", "layout": "three", "parent":"products" },' +
      '{ "id": 7, "title": "Power","filename": "pages/markets/detail","layout": "three", "parent":"markets" },' +
      '{ "id": 8, "title": "Oil &amp; Gas","filename": "pages/markets/detail","layout": "three", "parent":"markets" },' +
      '{ "id": 9, "title": "Alternative Fuels","filename": "pages/markets/detail","layout": "three", "parent":"markets" },' +
      '{ "id": 10, "title": "Services", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"capabilities" },' +
      '{ "id": 11, "title": "Valves", "filename": "pages/products/detail", "layout": "three", "parent":"products" },' +
      '{ "id": 12, "title": "Filters", "filename": "pages/products/detail", "layout": "three", "parent":"products" },' +
      '{ "id": 13, "title": "Intro Screen", "filename": "pages/index", "layout": "splash", "parent":"none" }' +
      ']}';

$(document).on("pagebeforecreate", function (event) {

    $.ajaxPrefilter(function (options) {
        options.crossDomain = true;
    });
    $.ajaxSetup({ async: false });

    get_child_pages('capabilities');
    get_child_pages('products');

    filepath = $('link').first().attr('href');
    var path = filepath.split("Content/");
    var fileDepth = path[0];


    var presentationID = getParameterByName('presID');
    if (presentationID) {
        $.getScript(fileDepth + 'Content/pres' + presentationID + '/settings.js');

        $('.row a').each(function () {
            this.href += (/\?/.test(this.href) ? '&' : '?') + 'presID=' + presentationID;
        });
        $('.panel-link-item').each(function () {
            this.href += (/\?/.test(this.href) ? '&' : '?') + 'presID=' + presentationID;
        });
    }

    load_page_elements(fileDepth);

    var pageID = getParameterByName('pageId');
    if (pageID == "") { pageID = 0; }
    load_page_info(pageID);
});

$(document).ready(function () {
    get_video_details();
});

function load_page_elements(fileDepth) {

    if (fileDepth == "../../") {
        var menuDepth = "../";
    }
    else { var menuDepth = ""; }

    var sidebarMenuHTML = '<ul><li><a href="' + menuDepth + 'capabilities/index.html?pageId=2" data-ajax="false" class="panel-link-item">Capabilities</a></li><li><a href="' + menuDepth + 'products/index.html?pageId=3" data-ajax="false" class="panel-link-item">Products</a></li><li><a href="' + menuDepth + 'markets/index.html?pageId=4" data-ajax="false" class="panel-link-item">Markets</a></li></ul>';
    $('#sectionMenu').html(sidebarMenuHTML);

    var headerRow = '<a href="' + fileDepth + 'index.html?pageId=0" data-ajax="false">HOME</a><br /><h1 id="header-title">PRS</h1><a href="#sectionMenu" data-icon="bars" id="section-menu-button">Menu</a><br/>';
    $("#header-row").html(headerRow).enhanceWithin();

}

/**
 * Get the ID of the page content
 * @returns int;
 */
function get_container_id() {
    var item;
    item = $('#page-container').data('pageid');

    return item;
}

function get_page_details(id) {

    var select = JSON.parse(pagelist);
    item = select.pages[id];

    return item;
}

function get_child_pages(section) {

    var select = JSON.parse(pagelist);
    var items = select.pages;
    var fileDepth = get_file_location();
    $.each(items, function () {
        if (this.parent == section) {

            var html = '<div class="col-sm-2"><a href="' + fileDepth + this.filename + '.html?pageId=' + this.id + '" data-ajax="false">' + this.title + '</a></div>';
            var element = section + '-child-pages-list';
            $("." + element).append(html);
        }
    });
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}

function get_available_presentations() {

    var presentations = '[{ "id": "1", "company":"Bulls" },' +
        '{ "id":2, "company":"Blackhawks"}' +
        ']';

    livepresentations = JSON.parse(presentations);
    $.each(livepresentations, function () {
        var html = '<a href="pages/index.html?pageId=13&presID=' + this.id + '" class="ui-btn" id="view-content-button" data-ajax="false">' + this.company + '</a>';
        $('#presentations-list').append(html);

        var presentationID = getParameterByName('presID');

        if (this.id == presentationID) {
            $('#view-content-link').attr('href', 'mainMenu.html?pageId=1&presID=' + this.id);
        }

    });

}

function get_available_markets() {
    livemarkets = JSON.parse(marketList);

    $.each(livemarkets, function () {
        var obj = getObjects(JSON.parse(pagelist), 'title', this.title);
        pageId = obj[0].id;
        var html = '<div class="navigation-item"><img src="' + fileDepth + 'Content/images/item-menu-' + this.slug + '.gif" /><br /> <a href="' + menuDepth + 'markets/detail.html?pageId=' + pageId + '&presID='+presID+'" data-ajax="false">' + this.title + '</a></div>'
        $('.item-menu').append(html);
    });
}

function get_presentation_settings() {
    settings = JSON.parse(settings);

    $.each(settings, function () {
        $('#header-title').html(this.division);
        $('#client-name').html(this.client);
        $('#client-logo').attr('src', this.assetDir + 'images/logo.png');
    });
}

function get_file_location() {
    filepath = $('link').first().attr('href');

    var path = filepath.split("Content/");

    var fileDepth = path[0];

    return fileDepth;
}

function get_video_settings() {

    livevideos = JSON.parse(videoList);
    $.each(livevideos, function () {

        var path = menuDepth + 'Content/videos';
        if (this.custom == true) { path = menuDepth + 'Content/pres' + presID + '/videos'; }
        var html = '<li>' + this.title + ' - ' + path + '/' + this.filename + '</li>';
        $('#video-list').append(html);
    });
}

function get_video_details() {
    livevideos = JSON.parse(videoList);
    $.each(livevideos, function () {
        alert(fileDepth);
        var path = fileDepth + 'Content/videos';
        if (this.custom == true) { path = fileDepth + 'Content/pres' + presID + '/videos'; }
        var posterImage = path + '/' + this.filename + '.gif';
        var video = path + '/' + this.filename + '.mp4';
        console.log(posterImage);
        console.log(video);
        $('#video-poster').attr('src', posterImage);
        $('#mp4-path').attr('src', video);

        //var data = $('#demo_video_html5_api').data('setup');
        //console.log(data);
        //$('.video-js').data("setup", { "bigPlayButton": true, "controlBar": false, "type": "video/mp4", "src": video })
        //var data = $('.video-js').data('setup');
        //console.log(data);


    });
}

/**
 * Using the page ID, gather and display page layout and HTML content
 * @param id
 */
function load_page_info(id) {
    var filename;
    var pageLayout;
    var title;

    var page = get_page_details(id);

    filename = page.filename;
    pageLayout = page.layout;
    title = page.title;

    // Display page information
    $('#page-container').attr('data-pageid', id);
    $('#page-title').html(title);

    // Set page layout
    $('#section-menu-button').show();
    $('#view-content-button').hide();
    $('#footer-menu').show();


    if (pageLayout == 'home') {
        get_available_presentations();

        $('#section-menu-button').hide();
        $('#view-content-button').show();
        $('#footer-menu').hide();
    }
    if (pageLayout == 'splash') {
        show_animated_overlay();
    }
    if (pageLayout == 'two') {
        $('#footer-menu').hide();
    }
    if (pageLayout == 'text-video') {
    }
    if (pageLayout == 'text-image') {

    }
    if (pageLayout == 'text-only') {
        $('#video-container').remove();
        $('#video-container-setup').remove();
    }
}

function show_animated_overlay() {
    var delayTime = 1000;

    var docHeight = $(document).height();
    var narrowHeight = docHeight * .25;
    var centerHeight = docHeight * .5;
    var docBottom = $(document).height() - narrowHeight;

    $("body").append("<div id='overlay-top'></div>");
    $("body").append("<div id='overlay-center'></div>");
    $("body").append("<div id='overlay-bottom'></div>");

    $("#overlay-top")
       .height(narrowHeight)
       .css({
           'opacity': 0.8,
           'position': 'absolute',
           'top': 0,
           'left': 0,
           'background-color': 'blue',
           'width': '100%',
           'z-index': 5000
       });
    $("#overlay-center")
   .height(centerHeight)
   .css({
       'opacity': 0.8,
       'position': 'absolute',
       'top': narrowHeight,
       'left': 0,
       'background-color': 'blue',
       'width': '100%',
       'z-index': 5000,
       'margin-top': 5,
       'margin-bottom': 5
   });
    $("#overlay-bottom")
   .height(narrowHeight)
   .css({
       'opacity': 0.8,
       'position': 'absolute',
       'top': docBottom,
       'left': 0,
       'background-color': 'blue',
       'width': '100%',
       'z-index': 5000
   });

    $(".fly-in")
    .css({
        'position': 'absolute',
        'top': narrowHeight,
        'left': -3000,
        'width': '100%'
    });

    $('#overlay-center').delay(delayTime).animate({
        left: 3000,
    }, 600);
    $('#overlay-top').delay(delayTime).animate({
        left: -3000,
    }, 1000);
    $('#overlay-bottom').delay(delayTime).animate({
        left: -3000,
    }, 800);

    $('.fly-in').delay(delayTime).animate({
        left: 0
    }, 1500);

    //$('.view-content-link').delay(delayTime).fadeIn();
}
///**
// * Collects app settings array
// * @returns array
// */
//function get_app_settings() {
//    var settings;
//    settings = {
//        culture: "EN"
//    };
//
//    return settings;
//}
