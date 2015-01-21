presID = 1;

var fileDepth = get_file_location();

if (fileDepth == "../../") {
    var menuDepth = "../";
}
else { var menuDepth = ""; }

var settings = '[{ "id": 1, "company":"Bulls", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/" }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power", "filename": "one", "layout" : "three" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas", "filename": "two","layout": "three" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":true},' +
    '{ "id": 1, "title": "Video 2", "filename":"Subtitles", "custom":false}' +
    ']';

get_video_settings();
get_available_markets(marketList);
get_presentation_settings();

