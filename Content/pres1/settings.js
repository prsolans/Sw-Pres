presID = 1;

var fileDepth = get_file_location();

if (fileDepth == "../../") {
    var menuDepth = "../";
}
else { var menuDepth = ""; }

var settings = '[{ "id": 1, "division":"Swagelok Bristol", "client":"Bulls", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/" }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":true},' +
    '{ "id": 1, "title": "Video 2", "filename":"Subtitles", "custom":false}' +
    ']';

get_video_settings();
get_available_markets(marketList);
get_presentation_settings();
get_video_details();

