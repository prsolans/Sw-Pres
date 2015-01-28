presID = 2;

var fileDepth = get_file_location();
var menuDepth = "";
if (fileDepth == "../../") {
    menuDepth = "../";
}

var settings = '[{ "id": 0, "division": "Swagelok International", "client":"Blackhawks", "assetDir":"' + fileDepth + 'Content/pres' + presID + '/" }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" },' +
       '{ "id": 2, "title": "Alternative Fuels", "slug":"alternative-fuels" }' +
       ']';

var videoList = '[{ "id": 0, "title": "Video 1", "filename":"Subtitles", "custom":true}' +
    ']';

var layoutsList = '[]';
var content = '[]';

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

