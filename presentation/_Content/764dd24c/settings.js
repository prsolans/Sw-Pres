presID = '764dd24c';

var fileDepth = get_file_location();
var menuDepth = "";
if (fileDepth == "../../") {
    menuDepth = "../";
}

var settings = '[{ "id": 0, "division":"Swagelok D&uuml;sseldorf", "client":"Tata", "assetDir":"_Content/' + presID + '/", "hasCaseStudy":true }]';

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
       '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" }' +
       ']';

var videoList = '[' +
    '{ "page_element": "ceo-video", "title": "Video 1", "videofile":"swagelok_video_artAnton.mp4", "posterfile":"swagelok_video_artAnton.jpg", "subtitlefile":"swagelok_video_artAnton.vtt", "caption":"A Word from Art Anton<br/>Swagelok President and CEO"},' +
    '{ "page_element": "applications-video", "title": "Video 1", "videofile":"swagelok_video_artAnton.mp4", "posterfile":"swagelok_video_artAnton.jpg", "subtitlefile":"swagelok_video_artAnton.vtt", "caption":"A Word from Art Anton<br/>Swagelok President and CEO"},' +
    '{ "page_element": "distributor-video", "title": "Video 2", "videofile":"distributor_video_andreas.mp4", "posterfile":"distributor_video_andreas.jpg", "subtitlefile":"distributor_video_andreas.vtt", "caption":"A Word from Andreas<br/>Swagelok D&uuml;sseldorf Managing Director"},' +
    '{ "page_element": "training-video", "title": "Video 2", "videofile":"distributor_video_andreas.mp4", "posterfile":"distributor_video_andreas.jpg", "subtitlefile":"distributor_video_andreas.vtt", "caption":"A Word from Andreas<br/>Swagelok D&uuml;sseldorf Managing Director"}' +
    ']';

var layoutsList = '[' +
    '{"page_id":"technicalSupportSales", "page_layout":"text-image"},' +
    '{"page_id":"training", "page_layout":"text-video"},' +
    '{"page_id":"applications", "page_layout":"text-video"}' +
    ']';

var content = '[' +
    '{"page_id":"services", "page_element":"left-custom-content", "html":"<h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page. This is a left-column custom content for the Services page. This is a left-column custom content for the Services page. This is a left-column custom content for the Services page.</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p>"},' +
    '{"page_id":"services", "page_element":"right-custom-content", "html":"<h3>Copy Subhead</h3><p>This is a right-column custom content for the Services page</p><h3>Copy Subhead</h3><p>This is a left-column custom content for the Services page</p>"},' +
    '{"page_id":"services", "page_element":"page-title", "html":"<p>Services headline</p>"},' +
    '{"page_id":"technicalSupportSales", "page_element":"right-custom-content", "html":"<p>This is a right-column custom content for the Technical Support page</p>"},' +
    '{"page_id":"technicalSupportSales", "page_element":"page-title", "html":"<p>Technical support headline</p>"},' +
    '{"page_id":"technicalSupportSales", "page_element":"left-custom-image", "src":"'+fileDepth+'Content/images/capabilities/technical.png"},' +
    '{"page_id":"mission", "page_element":"page-title", "html":"<p>Helping our Customers Grow</p>"},' +
    '{"page_id":"mission", "page_element":"page-content", "html":"<p>Helping you grow means leveraging the core values on which our company was founded and built: Customer Focus, Quality, Integrity, Respect for the Individual, Innovation, And Continuous Improvement. Our values have value, to our associates, our distributors and their associates, our customers, and their customers.</p>"},' +
    '{"page_id":"training", "page_element":"page-title", "html":"<p>Training headline</p>"}' +
    ']';

var theseSettings = get_presentation_settings();

if(theseSettings[0].hasCaseStudy == true){
    localStorage.setItem('hasCaseStudy', true);
}

get_available_markets(marketList);
get_custom_content(layoutsList, content);

if(localStorage.getItem('pageLayout') == 'text-video' || localStorage.getItem('pageLayout') == 'mission' || localStorage.getItem('pageLayout') == 'splash'){
    get_video_details(videoList);
}

