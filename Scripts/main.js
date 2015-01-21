var pagelist = '{ "pages": [ ' +
    '{ "id": 0, "title": "Presentation Lists", "filename": "index", "layout": "home", "parent":"none", "background":"home" },' +
    '{ "id": 1, "title": "Main Menu", "filename": "pages/mainMenu", "layout": "menu", "parent":"none", "background":"main-menu" },' +
    '{ "id": 2, "title": "Capabilities", "filename": "pages/capabilities/index", "layout": "two", "parent":"none", "background":"main-menu" },' +
    '{ "id": 3, "title": "Products", "filename": "pages/products/index", "layout": "two", "parent":"none", "background":"products" },' +
    '{ "id": 4, "title": "Markets", "filename": "pages/markets/index", "layout" : "two", "parent":"none", "background":"markets" },' +
    '{ "id": 5, "title": "Mission &amp; Values", "filename": "pages/capabilities/detail", "layout": "text-video", "parent":"capabilities", "background":"mission", "menu":"ca-mission" },' +
    '{ "id": 6, "title": "Fittings", "filename": "pages/products/detail", "layout": "three", "parent":"products", "background":"main-menu", "menu":"pr-fittings" },' +
    '{ "id": 7, "title": "Power","filename": "pages/markets/detail","layout": "three", "parent":"markets", "background":"power", "menu":"ma-power" },' +
    '{ "id": 8, "title": "Oil &amp; Gas","filename": "pages/markets/detail","layout": "three", "parent":"markets", "background":"main-menu", "menu":"ma-oil" },' +
    '{ "id": 9, "title": "Alternative Fuels","filename": "pages/markets/detail","layout": "three", "parent":"markets", "background":"main-menu", "menu":"ma-alternative" },' +
    '{ "id": 10, "title": "Services", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"capabilities", "background":"main-menu", "menu":"ca-services" },' +
    '{ "id": 11, "title": "Valves", "filename": "pages/products/detail", "layout": "three", "parent":"products", "background":"main-menu", "menu":"pr-valves" },' +
    '{ "id": 12, "title": "Filters", "filename": "pages/products/detail", "layout": "three", "parent":"products", "background":"main-menu", "menu":"pr-filters" },' +
    '{ "id": 13, "title": "Intro Screen", "filename": "pages/index", "layout": "splash", "parent":"none", "background":"home" },' +
    '{ "id": 14, "title": "Hoses and Flexible Tubing", "filename": "pages/products/detail", "layout": "three", "parent":"products", "background":"main-menu", "menu":"pr-hoses" },' +
    '{ "id": 15, "title": "Leak Detectors, Lubricants and Sealers", "filename": "pages/products/detail", "layout": "three", "parent":"products", "background":"main-menu", "menu":"pr-leak" },' +
    '{ "id": 16, "title": "Measurement Devices", "filename": "pages/products/detail", "layout": "three", "parent":"products", "background":"main-menu", "menu":"pr-measure" },' +
    '{ "id": 17, "title": "Power - Detail", "filename": "pages/products/slides", "layout": "three", "parent":"power", "background":"power-blur", "menu":"pr-leak" }' +
    ']}';

$(document).on("pagebeforecreate", function (event) {

    $.ajaxPrefilter(function (options) {
        options.crossDomain = true;
    });
    $.ajaxSetup({async: false});

    get_child_pages('capabilities');
    get_child_pages('products');

    filepath = $('link').first().attr('href');
    var path = filepath.split("Content/");
    var fileDepth = path[0];
    var presentationID = getParameterByName('presID');
    if (presentationID) {
        $.getScript(fileDepth + 'Content/pres' + presentationID + '/settings.js');
    }

    load_page_elements(fileDepth);

    var pageID = getParameterByName('pageId');
    if (pageID == "") {
        pageID = 0;
    }

    load_page_info(pageID, fileDepth);
});

$(document).ready(function () {
    var presentationID = getParameterByName('presID');

    $('.row a').not('.slide-tab').not('.view-content-link').each(function () {
        this.href += (/\?/.test(this.href) ? '&' : '?') + 'presID=' + presentationID;
    });
    $('.panel-link-item').each(function () {
        this.href += (/\?/.test(this.href) ? '&' : '?') + 'presID=' + presentationID;
    });

    $('#sectionMenu').on('panelbeforeopen', function () {
        $('#section-menu-button').hide();
    });

    $('#sectionMenu').on('panelclose', function () {
        $('#section-menu-button').show();
    });

});

/**
 * Checks the presentation specific settings and displays links to all markets that have been setup to appear within this presentation
 * Utilized for main menu page, section landing page, and bottom nav within the section
 */
function get_available_markets() {
    livemarkets = JSON.parse(marketList);

    $.each(livemarkets, function () {
        var obj = getObjects(JSON.parse(pagelist), 'title', this.title);
        pageId = obj[0].id;
        var html = '<div class="col-sm-2 landing-menu-item"><a href="' + menuDepth + 'markets/detail.html?pageId=' + pageId + '&presID=' + presID + '" data-ajax="false"><img width="100" src="' + fileDepth + 'Content/images/menu/' + obj[0].menu + '.png"/><br/> ' + this.title + '</a></div>';
        $('.item-menu').append(html);
    });
}

/**
 * Get child pages for Capabilities and Products sections, and display links to the pages
 * Utilized for main menu page, section landing page, and bottom nav within the section
 * @param section
 */
function get_child_pages(section) {

    var select = JSON.parse(pagelist);
    var items = select.pages;
    var fileDepth = get_file_location();
    $.each(items, function () {
        if (this.parent == section) {

            var html = '<div class="col-sm-2 landing-menu-item"><a href="' + fileDepth + this.filename + '.html?pageId=' + this.id + '" data-ajax="false"><img width="100" src="' + fileDepth + 'Content/images/menu/' + this.menu + '.png"/><br/>' + this.title + '</a></div>';
            var element = section + '-child-pages-list';
            $("." + element).append(html);
        }
    });
}

/**
 * Get the ID of the current page container
 * @returns int;
 */
function get_container_id() {
    var item;
    item = $('#page-container').data('pageid');

    return item;
}

/**
 * Checks page header to determine the depth of the current page within the file structure
 * @returns {*}
 */
function get_file_location() {
    filepath = $('link').first().attr('href');

    var path = filepath.split("Content/");

    return path[0];
}

/**
 * Given the current page container ID, checks the JSON containing generic page information and returns array of information relative to the existing page
 * Information includes: Page title, page parent, page layout, template filename, background image, navigation menu image
 * @param id
 * @returns {*}
 */
function get_page_details(id) {

    var select = JSON.parse(pagelist);
    item = select.pages[id];

    return item;
}

function get_presentation_settings() {
    settings = JSON.parse(settings);

    $.each(settings, function () {
        $('#header-title').html(this.division);
        $('#client-logo').attr('src', this.assetDir + 'images/logo.png');
    });
}

function get_video_details() {
    livevideos = JSON.parse(videoList);
    $.each(livevideos, function () {
        var path = fileDepth + 'Content/videos';
        if (this.custom == true) {
            path = fileDepth + 'Content/pres' + presID + '/videos';
        }
        var posterImage = path + '/' + this.filename + '.gif';
        var video = path + '/' + this.filename + '.mp4';

        $('#video-poster').attr('src', posterImage);

        var html = '<video id="demo_video" class="video-js vjs-default-skin" controls preload="auto" data-setup=""><source id="mp4-path" src="' + video + '" type="video/mp4" /> <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>';

        $('.modal-body').html(html);
        $('.video-js').data("setup", {"bigPlayButton": true, "controlBar": false, "type": "video/mp4", "src": video})

    });


    videojs('demo_video').ready(function () {

        // Store the video object
        var myPlayer = this, id = myPlayer.id();

        // Make up an aspect ratio
        var aspectRatio = 9 / 16;

        function resizeVideoJS() {
            var width = document.getElementById(id).parentElement.offsetWidth;
            myPlayer.width(width).height(width * aspectRatio);
        }

        $("#videoModal").on('show.bs.modal', function () {

            var width = $(document).width();
            myPlayer.width(width).height(width * aspectRatio);
            myPlayer.play();

            $(window).resize(function () {
                resizeVideoJS();
            });

            $('.video-js').click(function () {
                $('#videoModal').modal('hide');
            });

        });

        $("#videoModal").on('hidden.bs.modal', function () {
            myPlayer.pause();
        });

    });

}

function get_video_settings() {

    livevideos = JSON.parse(videoList);
    $.each(livevideos, function () {

        var path = menuDepth + 'Content/videos';
        if (this.custom == true) {
            path = menuDepth + 'Content/pres' + presID + '/videos';
        }
        var html = '<li>' + this.title + ' - ' + path + '/' + this.filename + '</li>';
        $('#video-list').append(html);
    });
}

function load_page_elements(fileDepth) {
    var pageID = getParameterByName('pageId');
    var presID = getParameterByName('presID');

    if (fileDepth == "../../") {
        var menuDepth = "../";
    }
    else {
        var menuDepth = "";
    }

    var sidebarMenuHTML = '<ul><li class="capabilities-panel-item"><a href="' + menuDepth + 'capabilities/index.html?pageId=2" data-ajax="false" class="panel-link-item">Capabilities</a></li><li class="products-panel-item"><a href="' + menuDepth + 'products/index.html?pageId=3" data-ajax="false" class="panel-link-item">Products</a></li><li class="markets-panel-item"><a href="' + menuDepth + 'markets/index.html?pageId=4" data-ajax="false" class="panel-link-item">Markets</a></li></ul><p><a href="' + fileDepth + 'index.html?pageId=0" data-ajax="false">HOME</a><br />';
    $('#sectionMenu').html(sidebarMenuHTML);

    var headerRow = '<a href="' + fileDepth + 'pages/index.html?pageId=13&presID=' + presID + '" style="background: none !important; border: none !important" data-ajax="false"><img src="' + fileDepth + 'Content/images/swagelok-logo.jpg" id="header-logo"><h1 id="header-title"></h1></a><a href="#sectionMenu" id="section-menu-button" class="ui-btn-right"><img src="' + fileDepth + 'Content/images/icons-png/bars-white.png" height="23"/></a><br/>';
    $("#header-row").html(headerRow).enhanceWithin();

    if (pageID == 13) {
        $('#view-content-link').attr('href', 'mainMenu.html?pageId=1&presID=' + presID);
    }

}

/**
 * Using the page ID, gather and display page layout and HTML content
 * @param id
 */
function load_page_info(id, fileDepth) {
    var filename;
    var pageLayout;
    var title;
    var background;

    var page = get_page_details(id);

    filename = page.filename;
    pageLayout = page.layout;
    title = page.title;
    background = page.background;

    if (fileDepth == undefined) {
        filepath = $('link').first().attr('href');
        var path = filepath.split("Content/");
        var fileDepth = path[0];
    }

    // Display page information
    $('#page-container').attr('data-pageid', id);
    $('body').css('background', 'url(' + fileDepth + 'Content/images/backgrounds/' + background + '.jpg)');
    $('body').css('background-size', 'cover').css('background-repeat', 'no-repeat');
    $('#page-title').html(title);

    // Set page layout
    $('#section-menu-button').show();
    $('#view-content-button').hide();
    $('#footer-menu').show();


    // Home will be replaced by app functionality
    if (pageLayout == 'home') {
        get_available_presentations();
        $('#section-menu-button').hide();
        $('#view-content-button').show();
        $('#footer-menu').hide();
    }
    if (pageLayout == 'menu') {
        show_animated_menu();
        $('#section-menu-button').hide();
    }
    if (pageLayout == 'splash') {
        show_animated_overlay();
        $('#section-menu-button').hide();
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

/**
 * Controls the display of the overlay when the intro page is loaded.
 */
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
            'opacity': 1,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'background-color': '#003a77',
            'width': '100%',
            'z-index': 5000
        });
    $("#overlay-center")
        .height(centerHeight)
        .css({
            'opacity': 1,
            'position': 'absolute',
            'top': narrowHeight,
            'left': 0,
            'background-color': '#003a77',
            'width': '100%',
            'z-index': 5000,
            'margin-top': 5,
            'margin-bottom': 5
        });
    $("#overlay-bottom")
        .height(narrowHeight)
        .css({
            'opacity': 1,
            'position': 'absolute',
            'top': docBottom,
            'left': 0,
            'background-color': '#003a77',
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
        left: 3000
    }, 600);
    $('#overlay-top').delay(delayTime).animate({
        left: -3000
    }, 1000);
    $('#overlay-bottom').delay(delayTime).animate({
        left: -3000
    }, 800);

    $('.fly-in').delay(delayTime).animate({
        left: 0
    }, 1500);

}

function show_animated_menu() {
    var delayTime = 500;

    $('.menu-header').animate({
        left:0
    }, 1000);

    // Calculate width of header element
    // It is set as a percentage, but we need a px dimension
    var width = $('.menu-header').width()/100;
    var pxwidth = $(document).width() * width;

    $('.menu-list').delay(delayTime).animate({
        left: pxwidth
    }, 800);


}


/** UTILITY FUNCTIONS */

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

/** DEBUG FUNCTIONS */

/**
 This function will be replaced by app-driven functionality to select available presentations
 */
function get_available_presentations() {

    var presentations = '[{ "id": "1", "company":"Bulls" },' +
        '{ "id":2, "company":"Blackhawks"}' +
        ']';

    livepresentations = JSON.parse(presentations);
    $.each(livepresentations, function () {
        var html = '<a href="pages/index.html?pageId=13&presID=' + this.id + '" class="ui-btn" id="view-content-button" data-ajax="false">' + this.company + '</a>';
        $('#presentations-list').append(html);

    });

}