var pagelist = '{' +
    '"pages": [ ' +
    '{ "id": 0, "title": "Presentation Lists", "filename": "index", "layout": "home", "parent":"0", "background":"home" },' +
    '{ "id": 1, "title": "Intro Screen", "filename": "pages/index", "layout": "splash", "parent":"0", "background":"home" },' +
    '{ "id": 2, "title": "Main Menu", "filename": "pages/mainMenu", "layout": "menu", "parent":"0", "background":"main-menu" },' +
    '{ "id": 3, "title": "Capabilities", "filename": "pages/capabilities/index", "layout": "landing", "parent":"0", "background":"main-menu" },' +
    '{ "id": 4, "title": "Products", "filename": "pages/products/index", "layout": "landing", "parent":"0", "background":"products" },' +
    '{ "id": 5, "title": "Markets", "filename": "pages/markets/index", "layout" : "landing", "parent":"0", "background":"markets" },' +
    '{ "id": 6, "title": "Mission &amp; Values", "filename": "pages/capabilities/detail", "layout": "text-video", "parent":"3", "background":"mission", "menu":"ca-mission" },' +
    '{ "id": 7, "title": "Technical Support &amp; Sales", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"3", "background":"mission", "menu":"ca-support" },' +
    '{ "id": 8, "title": "Services", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"3", "background":"main-menu", "menu":"ca-services" },' +
    '{ "id": 9, "title": "Training", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"3", "background":"mission", "menu":"ca-training" },' +
    '{ "id": 10, "title": "Custom Solutions", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"3", "background":"mission", "menu":"ca-partner" },' +
    '{ "id": 11, "title": "One Swagelok", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"3", "background":"mission", "menu":"ca-mission" },' +
    '{ "id": 12, "title": "Applications", "filename": "pages/capabilities/detail", "layout": "text-only", "parent":"3", "background":"mission", "menu":"ca-delivery" },' +
    '{ "id": 13, "title": "Power", "filename": "pages/markets/detail","layout": "market", "parent":"5", "background":"power", "menu":"ma-power" },' +
    '{ "id": 14, "title": "Power - Detail", "filename": "pages/products/slides", "layout": "market", "parent":"13", "background":"power-blur", "menu":"pr-leak" },' +
    '{ "id": 15, "title": "Oil &amp; Gas","filename": "pages/markets/detail","layout": "market", "parent":"5", "background":"main-menu", "menu":"ma-oil" },' +
    '{ "id": 16, "title": "Alternative Fuels","filename": "pages/markets/detail","layout": "market", "parent":"5", "background":"main-menu", "menu":"ma-alternative" },' +
    '{ "id": 17, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"4", "background":"main-menu", "menu":"pr-fittings", "headline":"Fittings Landing Page", "content":"LIST of Items" },' +
    '{ "id": 18, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Tube Fittings and Tube Adapters", "content":"<p>Swagelok tube fittings and adapters are easy to install and can be disassembled and reassembled many times while retaining their leak-tight seal. Subjected to burn tests, shock impact tests, external pressure tests, finite element analysis, and more, our tube fittings perform beyond all expectations.</p> <p>Available in a variety of materials and configurations, Swagelok tube fittings and adapters deliver robust tube grip, vibration resistance, and leak-free performance. These attributes are critical to the oil and gas, power, chemical and refining, alternative fuels, and semiconductor industries. Our selection of tube fittings and adapters includes:</p><ul><li>Elbows</li><li>Caps and Plugs</li><li>Chromatograph and Column End</li><li>Straights</li><li>Tees</li><li>Union Crosses</li><li>High Pressure</li><li>Medium Pressure</li><li>Accessories</li></ul>" },' +
    '{ "id": 19, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Biopharmaceutical Fittings & Adapters", "content":"<p>Swagelok’s biopharmaceutical fittings and adapters are engineered to solve purity problems inherent in conventional sanitary clamp fittings. Through enhanced drainability and cleanability, as well as thevirtual elimination of gasket extrusion and fluid holdup, our fittings and adapters limit entrapment areas that can harbor bacteria.</p><p>Ideal for sanitary processing applications, Swagelok biopharmaceutical products meet ASME-BPE and 3-A sanitary standards. Our selection includes:</p><ul><li>TS Series Sanitary Clamps</li><li>TS Series SanitaryClamp Caps</li><li>TS Series Sanitary Clamp Ferrules</li></ul>"},' +
    '{ "id": 20, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Dielectric Fittings & Adapters", "content":""},' +
    '{ "id": 21, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Flange tSwagelok Tube Fitting Pipe", "content":""},' +
    '{ "id": 22, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Pipe Fittings & Adapters", "content":""},' +
    '{ "id": 23, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Vacuum Fittings & Adapters", "content":""},' +
    '{ "id": 24, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"VCO-Ring Face Seal", "content":""},' +
    '{ "id": 25, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"VCR Metal Gasket Face Seal & VCR Split-Nut Assemblies", "content":""},' +
    '{ "id": 26, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"Weld Fittings & Adapters", "content":""},' +
    '{ "id": 27, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"B \'VCO\' Fittings", "content":""},' +
    '{ "id": 28, "title": "Fittings", "filename": "pages/products/detail", "layout":"product", "parent":"17", "background":"main-menu", "menu":"pr-fittings", "headline":"TS Fittings", "content":"<p>TS Series biopharmaceutical fittings feature controlled gasket compression to virtually eliminate fluid holdup in conventional sanitary clamp fittings. Designed to meet ASME-BPE and 3-A sanitary standards, patented TS fittings feature boreline seals and metal-to-metal stops to improve drainability and cleanability. Leak-free performance throughout a range of pressure-temperature ratings makes TS fittings ideal wherever product purity and integrity are critical. Available in sizes from ½ to 4 inches, our selection includes:</p><ul><li>TS Fittings</li></ul>" },' +
    '{ "id": 29, "title": "Valves", "filename": "pages/products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-valves" },' +
    '{ "id": 30, "title": "Filters", "filename": "pages/products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-filters" },' +
    '{ "id": 31, "title": "Hoses and Flexible Tubing", "filename": "pages/products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-hoses" },' +
    '{ "id": 32, "title": "Leak Detectors, Lubricants and Sealers", "filename": "pages/products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-leak" },' +
    '{ "id": 33, "title": "Measurement Devices", "filename": "pages/products/detail", "layout": "product", "parent":"4", "background":"main-menu", "menu":"pr-measure" },' +
    '{ "id": 34, "title": "Case Study", "filename": "pages/casestudy/slides", "layout": "text-only", "parent":"0", "background":"main-menu" }' +
    ']}';

var idleTime = 0;
var videoWasOpenedAtPageLoad = false;

$(document).on("pagebeforecreate", function () {

    $.ajaxPrefilter(function (options) {
        options.crossDomain = true;
    });
    $.ajaxSetup({async: false});

    get_child_pages('4'); // Products
    get_child_pages('3'); // Capabilities

    var filepath = $('link').first().attr('href');
    var path = filepath.split("Content/");
    var fileDepth = path[0];
    var presentationID = getParameterByName('presID');
    if (presentationID) {
        $.getScript(fileDepth + 'Content/pres' + presentationID + '/settings.js');
    }

    load_page_elements(fileDepth, presentationID);

    var pageID = getParameterByName('pageId');
    if (pageID == "") {
        pageID = 0;
    }

    load_page_info(pageID, fileDepth);

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem('presentationID', presentationID);
        localStorage.setItem('pageID', pageID);
        localStorage.setItem('hasCaseStudy', false);

    } else {
        // Sorry! No Web Storage support..

        alert('Sorry! No Web Storage support...');
    }

});

$(document).ready(function () {

    //start_inactivity_timer();

    $('body').removeClass('ui-overlay-a');
    $('div').removeClass('ui-page-theme-a');
    var presentationID = getParameterByName('presID');

    $('.row a').not('.slide-tab').not('.view-content-link').each(function () {
        this.href += (/\?/.test(this.href) ? '&' : '?') + 'presID=' + presentationID;
    });
    $('.panel-link-item').each(function () {
        this.href += (/\?/.test(this.href) ? '&' : '?') + 'presID=' + presentationID;
    });

    var panelmenu = $('#sectionMenu');

    panelmenu.on('panelbeforeopen', function () {
        $('#section-menu-button').hide();
    });

    panelmenu.on('panelclose', function () {
        $('#section-menu-button').show();
    });

    $('#page-container').css('height', $(window).height());

    var touchArea = document.querySelector("body");

    var mc = new Hammer(touchArea, {preventDefault: false});
    mc.on("swipe pan panstart panend pancancel",
        touchInteractionHandler);

    function touchInteractionHandler(ev) {
        if (ev.type == 'panend' && ev.distance > 350 && ev.center.x < 5) {
            try {
                Mt.App.fireEvent('leavePresentation', {});
            } catch (e) {
                alert(e.message + ' ' + e.stack);
            }
        }
    }

});


/**
 * Checks the presentation specific settings and displays links to all markets that have been setup to appear within this presentation
 * Utilized for main menu page, section landing page, and bottom nav within the section
 */
function get_available_markets() {
    var livemarkets = JSON.parse(marketList);

    var thisPage = get_container_id();

    if (thisPage > 1) {
        $.each(livemarkets, function () {
            var obj = getObjects(JSON.parse(pagelist), 'title', this.title);
            var pageId = obj[0].id;
            var html = '<div class="col-sm-2 landing-menu-item"><a href="' + menuDepth + 'markets/detail.html?pageId=' + pageId + '&presID=' + presID + '" data-ajax="false"><img width="100" src="' + fileDepth + 'Content/images/menu/' + obj[0].menu + '.png"/><br/> ' + this.title + '</a></div>';
            $('.item-menu').append(html);
        });
    }
}

function get_custom_content(layouts, content) {

    var thisPage = get_container_id();

    var thisLayout = get_page_layout(layouts, thisPage);

    if (thisLayout != false && thisLayout != 'menu') {
        set_page_layout(thisLayout);
    }

    console.log(thisLayout);

    var thisContent = getObjects(JSON.parse(content), 'page_id', thisPage);

    $.each(thisContent, function(){

        if (typeof this !== "undefined") {

            var elementId = this.page_element;

            if(this.html != undefined) {
                var html = this.html;
                $('#' + elementId).html(html);
            }

            if(this.src != undefined){
                var src = this.src;
                $('#' + elementId).attr('src', src);
            }
        }
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
            var parent = get_page_details(section);
            var title = parent.title.toLowerCase();
            var html = '<div class="col-sm-2 landing-menu-item"><a href="' + fileDepth + this.filename + '.html?pageId=' + this.id + '" data-ajax="false"><img width="100" src="' + fileDepth + 'Content/images/menu/' + this.menu + '.png"/><br/>' + this.title + '</a></div>';
            var element = title + '-child-pages-list';
            $("." + element).append(html);
        }
    });
}

/**
 * Get the ID of the current page container
 * @returns int;
 */
function get_container_id() {

    return $('#page-container').data('pageid');
}

/**
 * Checks page header to determine the depth of the current page within the file structure
 * @returns {*}
 */
function get_file_location() {
    var filepath = $('link').first().attr('href');

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

    return select.pages[id];
}

function get_page_layout(layouts, thisPage) {

    var thisLayout = getObjects(JSON.parse(layouts), 'page_id', thisPage);

    var page_layout = false;
    if (typeof thisLayout[0] !== "undefined") {
        page_layout = thisLayout[0].page_layout;
    }
    else {
        var page = get_page_details(thisPage);
        page_layout = page.layout;
    }

    return page_layout;
}

function get_presentation_settings() {
    if (settings) {
        var presSettings = JSON.parse(settings);
    }
    else {
        console.log('ERROR: Presentations settings JSON feed');
    }
    $.each(presSettings, function () {

        $('#header-title').html(this.division);
        $('#client-logo').attr('src', this.assetDir + 'images/logo.png');
    });

    return presSettings;
}

function get_video_details() {
    var livevideos = JSON.parse(videoList);
    $.each(livevideos, function () {
        var path = fileDepth + 'Content/videos';
        if (this.custom == true) {
            path = fileDepth + 'Content/pres' + presID + '/videos';
        }
        var posterImage = path + '/' + this.filename + '.gif';
        var video = path + '/' + this.filename + '.mp4';
        var subtitles = path + '/' + this.filename + '.vtt';

        $('#video-poster').attr('src', posterImage);

        var html = '<video id="demo_video" class="video-js vjs-default-skin" controls preload="auto" data-setup=""><source id="mp4-path" src="' + video + '" type="video/mp4" /><track kind="subtitles" src="' + subtitles + '" srclang="en" label="English" default data-ajax="false"><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p></video>';

        $('.modal-body').html(html);
        $('.video-js').data("setup", {"bigPlayButton": true, "controlBar": false, "type": "video/mp4", "src": video})

    });

    videojs('demo_video', {}, function () {

        // Store the video object
        var myPlayer = this, id = myPlayer.id();

        // Make up an aspect ratio
        var aspectRatio = 9 / 16;

        function resizeVideoJS() {
            var width = document.getElementById(id).parentElement.offsetWidth;
            myPlayer.width(width).height(width * aspectRatio);
        }

        var videoModal = $("#videoModal");

        videoModal.on('show.bs.modal', function () {

            var width = $(window).width();
            myPlayer.width(width).height($(window).height());

            $('.modal-dialog').css('margin', '0 !important');

            myPlayer.play();

            $(window).resize(function () {
                resizeVideoJS();
            });

            $('#demo_video_html5_api').on('click', function () {
                videoModal.modal('hide');
                show_animated_overlay();
            });

            $('#demo_video_html5_api').on('tap', function () {
                videoModal.modal('hide');
                show_animated_overlay();
            });

        });

        videoModal.on('hidden.bs.modal', function () {
            myPlayer.pause();
        });

    });


}

function get_video_settings() {

    var livevideos = JSON.parse(videoList);
    $.each(livevideos, function () {
        var path = menuDepth + 'Content/videos';
        if (this.custom == true) {
            path = menuDepth + 'Content/pres' + presID + '/videos';
        }
        var html = '<li>' + this.title + ' - ' + path + '/' + this.filename + '</li>';
        $('#video-list').append(html);
    });

}

function load_page_elements(fileDepth, presentationID) {
    var pageID = getParameterByName('pageId');

    var menuDepth;

    if (fileDepth == "../../") {
        menuDepth = "../";
    }
    else {
        menuDepth = "";
    }

    var caseStudyLink = '';

    if (localStorage.hasCaseStudy == 'true'){
        caseStudyLink = '<li class="casestudy-panel-item"><a href="' + menuDepth + 'casestudy/slides.html?pageId=34" data-ajax="false" class="panel-link-item">Case Study</a></li>';
    }

    var sidebarMenuHTML = '<ul><li class="capabilities-panel-item"><a href="' + menuDepth + 'capabilities/index.html?pageId=3" data-ajax="false" class="panel-link-item">Capabilities</a></li><li class="products-panel-item"><a href="' + menuDepth + 'products/index.html?pageId=4" data-ajax="false" class="panel-link-item">Products</a></li><li class="markets-panel-item"><a href="' + menuDepth + 'markets/index.html?pageId=5" data-ajax="false" class="panel-link-item">Markets</a></li>'+caseStudyLink+'</ul><p style="float: right;"><a href="' + fileDepth + 'index.html?pageId=0" data-ajax="false">{DEBUG} HOME</a><br />';
    $('#sectionMenu').html(sidebarMenuHTML);

    var headerRow = '<div id="header-left"><a href="' + fileDepth + 'pages/index.html?pageId=1&presID=' + presentationID + '" style="background: none !important; border: none !important" data-ajax="false"><img src="' + fileDepth + 'Content/images/swagelok-logo.jpg" id="header-logo"><h1 id="header-title"></h1></a><span id="submenu"></span></div><a href="#sectionMenu" id="section-menu-button" class="ui-btn-right"><img src="' + fileDepth + 'Content/images/icons-png/bars-white.png" height="23"/></a>';

    $("#header-row").html(headerRow);

    if (pageID == 1) {
        $('#view-content-link').attr('href', 'mainMenu.html?pageId=2&presID=' + presentationID);
    }

}

/**
 * Using the page ID, gather and display page layout and HTML content
 * @param id
 * @param fileDepth
 */
function load_page_info(id, fileDepth) {

    var parent;
    var pageLayout;
    var background;

    var title;
    var headline;
    var content;

    var page = get_page_details(id);

    var pres = getParameterByName('presID');

    parent = page.parent;
    pageLayout = page.layout;
    background = page.background;

    title = page.title;
    content = page.content;
    headline = page.headline;

    if (fileDepth == undefined) {
        var filepath = $('link').first().attr('href');
        var path = filepath.split("Content/");
        fileDepth = path[0];
    }

    // Display page information
    $('#page-container').attr('data-pageid', id);
    $('body').css('background', 'url(' + fileDepth + 'Content/images/backgrounds/' + background + '.jpg)');
    $('body').css('background-size', 'cover').css('background-repeat', 'no-repeat');

    if (headline == undefined) {
        $('#page-title').html(title);
    }
    else {
        $('#page-title').html(headline);
    }

    if (parent != '0') {

        var thisParent = get_page_details(parent);
        var thisParentsParent = get_page_details(thisParent.parent);

        var submenu = '<br/><span><a href="' + fileDepth + 'pages/' + thisParent.title.toLowerCase() + '/index.html?pageId=' + thisParent.id + '&presID=' + pres + '" data-ajax="false">&lt; ' + thisParent.title + '</a></span>';

        if(thisParentsParent.id == '5') { // Parent is Markets homepage
            submenu = '<br/><span><a href="' + fileDepth + 'pages/' + thisParentsParent.title.toLowerCase() + '/detail.html?pageId=' + thisParent.id + '&presID=' + pres + '" data-ajax="false">&lt; ' + thisParent.title + '</a></span>';
        }

        if (thisParentsParent.id == '4') { // Parent is Products homepage
            submenu = '<br/><span><a href="' + fileDepth + 'pages/' + thisParentsParent.title.toLowerCase() + '/index.html?pageId=' + thisParentsParent.id + '&presID=' + pres + '" data-ajax="false">&lt; ' + thisParentsParent.title + '</a></span>';
        }

        $("#submenu").html(submenu);

        if (thisParent.id == '4' || thisParentsParent.id == '4') { // Parent or Grandparent is in Products category
            var html = ' | <a href="" id="show-menu">' + title + '</a>';
            $('#submenu').append(html);
            show_submenu(pres, id);
        }

    }
    $('#page-content').html(content);

    set_page_layout(pageLayout);

}

function set_page_layout(pageLayout) {


   // Set page layout
    $('#section-menu-button').show();
    $('#view-content-button').hide();
    // Home will be replaced by app functionality
    if (pageLayout == 'home') {
        get_available_presentations();
        $('#section-menu-button').hide();
        $('#view-content-button').show();
    }
    if (pageLayout == 'splash') {
        show_animated_overlay();
        $('#section-menu-button').hide();
    }
    if (pageLayout == 'menu') {
        alert('show menu');
        show_animated_menu();
        $('#section-menu-button').hide();
    }
    if (pageLayout == 'market') {
        show_bottom_nav();
    }
    if (pageLayout == 'product') {
        show_bottom_nav();
    }
    if (pageLayout == 'text-video') {

        $('#left-column').removeClass('col-sm-6').addClass('col-sm-7');
        $('#right-column').removeClass('col-sm-6').addClass('col-sm-5');
        show_bottom_nav();

        var videoContainer = '<div id="video-container"> <!-- Button trigger modal --> <img id="video-poster" src="" data-toggle="modal" data-target="#videoModal"> <!-- Modal --> <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body"> <video id="demo_video" class="video-js vjs-default-skin" controls preload="auto" > <source id="mp4-path" src="" type="video/mp4" /> <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p> </video> </div> </div> </div> </div> </div>';

        var script = ' <script> $(document).ready(function () { videojs("demo_video").ready(function () { var myPlayer = this, id = myPlayer.id(); var aspectRatio = 9 / 16; function resizeVideoJS() { var width = document.getElementById(id).parentElement.offsetWidth; myPlayer.width(width).height(width * aspectRatio); } $("#videoModal").on("show.bs.modal", function () { var width = $(document).width(); myPlayer.width(width).height(width * aspectRatio); myPlayer.play(); $(window).resize(function () { resizeVideoJS(); }); $(".video-js").click(function () { $("#videoModal").modal("hide"); }); }); $("#videoModal").on("hidden.bs.modal", function () { myPlayer.pause(); }); }); }); </script>';

        $('#right-column').html(videoContainer);
        $('#video-setup').html(script);

    }
    if (pageLayout == 'text-image') {
        $('#left-column').removeClass('col-sm-6').addClass('col-sm-5');
        $('#right-column').removeClass('col-sm-6').addClass('col-sm-7');
        $('#left-column h1').remove();
        var imageContainer = '<img src="" id="left-custom-image" width="350" />';
        $('#left-custom-content').html(imageContainer);

        show_bottom_nav();

    }
    if (pageLayout == 'text-only') {
        show_bottom_nav();

    }
}

/**
 * Controls the display of the overlay when the intro page is loaded.
 */
function show_animated_overlay() {
    var delayTime = 1000;

    var docHeight = $(document).height();
    var narrowHeight = docHeight * .25;
    var centerHeight = docHeight * .49;
    var docBottom = $(document).height() - narrowHeight;

    var body = $("body");

    body.append("<div id='overlay-top'></div>");
    body.append("<div id='overlay-center'></div>");
    body.append("<div id='overlay-bottom'></div>");

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
        left: 0
    }, 1000);

    // Calculate width of header element
    // It is set as a percentage, but we need a px dimension
    var width = $('.menu-header').width() / 100;
    var pxwidth = $(document).width() * width;

    $('.menu-list').delay(delayTime).animate({
        left: pxwidth
    }, 800);

    alert('done');

}

function show_bottom_nav() {
    var delayTime = 600;

    var docHeight = $(document).height();

    var linkTop = docHeight - 25;


    $("#footer-menu-link")
        .css({
            'position': 'absolute',
            'top': linkTop + 'px',
            'text-align': 'center',
            'margin': 'auto',
            'height': '25px',
            'width': '100%',
            'z-index': 5000
        });

    $(document).ready(function () {
        var position = $("#footer-menu-link").offset().top;

        if (position == linkTop) {
            $('.row').css('opacity', '.6');
            $("#footer-menu-link").animate({
                top: docHeight - 185
            }, delayTime).css('opacity', '1');
        }

    });

    $("#footer-menu-link").on("click", function () {

        var position = $("#footer-menu-link").offset().top;

        if (position == linkTop) {
            $('.row').css('opacity', '.6');
            $("#footer-menu-link").animate({
                top: docHeight - 185
            }, delayTime).css('opacity', '1');
        }
        else {
            $('.row').css('opacity', '1');

            $("#footer-menu-link").animate({
                top: linkTop
            }, delayTime);
        }
    });

}

function show_submenu(pres, id) {

    var page = get_page_details(id);

    var select = JSON.parse(pagelist);
    var items = select.pages;

    var html = '<div id="submenu-content" style="display: none;"><ul>';

    $.each(items, function () {
        if (this.title == page.title && this.parent != 4) {
            html += '<li><a href="detail.html?pageId=' + this.id + '&presID=' + pres + '" data-ajax="false">' + this.headline + '</a></li>';
        }
    });

    html += '</ul></div>';
    $('#submenu').append(html);

    $('#show-menu').on('click', function () {

        if ($('#submenu-content').is(':visible')) {
            $('.row').css('opacity', '1');
            $('#submenu-content').slideToggle();
        }
        else {
            $('.row').css('opacity', '.4');
            $('#submenu-content').slideToggle();

        }
    });

}

function start_inactivity_timer() {

    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 1000); // 1 second

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function () {
        localStorage.setItem("inactive", "false");
        idleTime = 0;
    });
    $(this).keypress(function () {
        localStorage.setItem("inactive", "false");
        idleTime = 0;
    });
    $(this).on("tap", function () {
        localStorage.setItem("inactive", "false");
        idleTime = 0;
    })
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

function timerIncrement() {

    var thisPage = get_container_id();
    var inactive = getParameterByName('inactive');
    idleTime = idleTime + 1;
    console.log("Idletime: " + idleTime);

    if (thisPage == '1' && idleTime > 2 && !videoWasOpenedAtPageLoad) {
        if (localStorage.inactive == 'true') {
            $('#video-modal-link').click();
            idleTime = 0;
            videoWasOpenedAtPageLoad = true;
        }
    }
    if (idleTime > 20) { // 3 minutes
        if (thisPage != '1') {
            var home = fileDepth + 'pages/index.html?pageId=1&presID=1';
            localStorage.setItem("inactive", "true");
            window.location.href = home;
        }
        else {
            $('#video-modal-link').click();
            localStorage.setItem("inactive", "true");
            idleTime = 0;
        }
    }
}

/** DEBUG FUNCTIONS */

/**
 This function will be replaced by app-driven functionality to select available presentations
 */
function get_available_presentations() {

    var presentations = '[{ "id": "1", "company":"Bulls" },' +
        '{ "id":2, "company":"Blackhawks"}' +
        ']';

    var livepresentations = JSON.parse(presentations);
    $.each(livepresentations, function () {
        var html = '<a href="pages/index.html?pageId=1&presID=' + this.id + '" class="ui-btn" id="view-content-button" data-ajax="false">' + this.company + '</a>';
        $('#presentations-list').append(html);

    });

}