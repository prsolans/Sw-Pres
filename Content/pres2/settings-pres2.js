presID = 2;

var fileDepth = get_file_location();

if (fileDepth == "../../") {
    var menuDepth = "../";
}
else { var menuDepth = ""; }

var settings = '[{ "id": 1, "company":"Blackhawks", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/" }]';

var marketList = '[{ "id": 9, "title": "Power", "slug": "power", "filename": "one", "layout" : "three" },' +
       '{ "id": 11, "title": "Oil &amp; Gas", "slug":"oil-and-gas", "filename": "two","layout": "three" },' +
       '{ "id": 12, "title": "Alternative Fuels", "slug":"alternative-fuels", "filename": "three", "layout": "three" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":false}' +
    ']';

get_video_settings();
get_available_markets(marketList);
get_presentation_settings();
get_video_details();

