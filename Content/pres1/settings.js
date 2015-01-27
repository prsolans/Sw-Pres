presID = 1;

var fileDepth = get_file_location();

if (fileDepth == "../../") {
    var menuDepth = "../";
}
else { var menuDepth = ""; }

var settings = '[{ "id": 0, "division":"Swagelok Bristol", "client":"Bulls", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/", "hasCaseStudy":true }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":true},' +
    '{ "id": 1, "title": "Video 2", "filename":"Subtitles", "custom":false}' +
    ']';

var layoutsList = '[' +
    '{"id":0, "page_id":"8", "page_layout":"text-only"}' +
    ']';

var content = '[' +
    '{"id": 0, "page_id":"8", "page_element":"service-detail-page-copy", "html":"<p>This is a paragraph for the Services page</p>"}' +
    ']';

get_presentation_settings();
get_available_markets(marketList);
get_capabilities_content(layoutsList, content);
get_video_settings();
get_video_details();

