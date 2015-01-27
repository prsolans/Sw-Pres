presID = 1;

var fileDepth = get_file_location();
var menuDepth = "";
if (fileDepth == "../../") {
    menuDepth = "../";
}

var settings = '[{ "id": 0, "division":"Swagelok D&uuml;sseldorf", "client":"Bulls", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/", "hasCaseStudy":true }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":true},' +
    '{ "id": 1, "title": "Video 2", "filename":"Subtitles", "custom":false}' +
    ']';

var layoutsList = '[' +
    '{"id":1, "page_id":"7", "page_layout":"text-image"},' +
    '{"id":1, "page_id":"9", "page_layout":"text-video"}' +
    ']';

var content = '[' +
    '{"id": 0, "page_id":"8", "page_element":"left-custom-content", "html":"<h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page. This is a left-column custom content for the Services page. This is a left-column custom content for the Services page. This is a left-column custom content for the Services page.</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p>"},' +
    '{"id": 1, "page_id":"8", "page_element":"right-custom-content", "html":"<h3>Copy Subhead</h3><p>This is a right-column custom content for the Services page</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p>"},' +
    '{"id": 2, "page_id":"8", "page_element":"page-headline", "html":"<p>Services headline</p>"},' +
    '{"id": 3, "page_id":"7", "page_element":"right-custom-content", "html":"<p>This is a right-column custom content for the Technical Support page</p>"},' +
    '{"id": 4, "page_id":"7", "page_element":"page-headline", "html":"<p>Technical support headline</p>"},' +
    '{"id": 5, "page_id":"7", "page_element":"left-custom-image", "src":"'+fileDepth+'Content/images/capabilities/technical.png"},' +
    '{"id": 6, "page_id":"6", "page_element":"page-headline", "html":"<p>Mission &amp; Values headline</p>"},' +
    '{"id": 6, "page_id":"9", "page_element":"page-headline", "html":"<p>Training headline</p>"}' +
    ']';

var theseSettings = get_presentation_settings();

if(theseSettings[0].hasCaseStudy == true){
    localStorage.setItem('hasCaseStudy', true);
}

get_available_markets(marketList);
get_custom_content(layoutsList, content);

var thisLayout = get_page_layout(layoutsList, get_container_id());

if(thisLayout == 'text-video'){
    get_video_settings();
    get_video_details();
}

