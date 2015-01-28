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

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"distributor_video_andreas", "custom":true},' +
    '{ "id": 1, "title": "Video 2", "filename":"Subtitles", "custom":false}' +
    ']';

var layoutsList = '[' +
    '{"page_id":"technicalSupportSales", "page_layout":"text-image"},' +
    '{"page_id":"training", "page_layout":"text-video"}' +
    ']';

var content = '[' +
    '{"page_id":"services", "page_element":"left-custom-content", "html":"<h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page. This is a left-column custom content for the Services page. This is a left-column custom content for the Services page. This is a left-column custom content for the Services page.</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p>"},' +
    '{"page_id":"services", "page_element":"right-custom-content", "html":"<h3>Copy Subhead</h3><p>This is a right-column custom content for the Services page</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p>"},' +
    '{"page_id":"services", "page_element":"page-headline", "html":"<p>Services headline</p>"},' +
    '{"page_id":"technicalSupportSales", "page_element":"right-custom-content", "html":"<p>This is a right-column custom content for the Technical Support page</p>"},' +
    '{"page_id":"technicalSupportSales", "page_element":"page-headline", "html":"<p>Technical support headline</p>"},' +
    '{"page_id":"technicalSupportSales", "page_element":"left-custom-image", "src":"'+fileDepth+'Content/images/capabilities/technical.png"},' +
    '{"page_id":"mission", "page_element":"page-headline", "html":"<p>Mission &amp; Values headline</p>"},' +
    '{"page_id":"training", "page_element":"page-headline", "html":"<p>Training headline</p>"}' +
    ']';

var theseSettings = get_presentation_settings();

if(theseSettings[0].hasCaseStudy == true){
    localStorage.setItem('hasCaseStudy', true);
}

get_available_markets(marketList);
get_custom_content(layoutsList, content);

var thisLayout = get_page_layout(layoutsList);

if(thisLayout == 'text-video'){
    get_video_settings();
    get_video_details();
}

