presID = 2;

var fileDepth = get_file_location();

if (fileDepth == "../../") {
    var menuDepth = "../";
}
else { var menuDepth = ""; }

var settings = '[{ "id": 1, "division": "Swagelok International", "client":"Blackhawks", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/" }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" },' +
       '{ "id": 2, "title": "Alternative Fuels", "slug":"alternative-fuels" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":true}' +
    ']';

get_video_settings();
get_available_markets(marketList);
get_presentation_settings();
get_video_details();

