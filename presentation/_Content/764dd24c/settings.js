presID = '764dd24c';

var fileDepth = get_file_location();
var menuDepth = "";
if (fileDepth == "../../") {
        menuDepth = "../";
    }


var settings = '[{ "id": "'+presID+'", "division":"Swagelok D&uuml;esseldorf", "client":"Tata", "assetDir":"/presentation/_Content/' + presID + '/", "hasCaseStudy":true }]';

var theseSettings = get_presentation_settings();

var presentationDirectory = theseSettings[0].assetDir;

if (theseSettings[0].hasCaseStudy == true) {
    localStorage.setItem('hasCaseStudy', true);

}

var marketList = '[{ "id": 0, "title": "Power", "slug": "power" },' +
    '{ "id": 1, "title": "Oil &amp; Gas", "slug":"oil-and-gas" }' +
    ']';

var videoList = '[' +
    '{ "page_element": "ceo-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/swagelok_video_artAnton.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":"A Word from Art Anton<br/>Swagelok President and CEO"},' +
    '{ "page_element": "distributor-video", "videofile":"/presentation/_Content/videos/distributor_video_andreas.mp4", "posterfile":"/presentation/_Content/videos/distributor_video_andreas.jpg", "subtitlefile":"/presentation/_Content/videos/distributor_video_andreas.vtt", "caption":"A Word from Andreas<br/>Swagelok D&uuml;sseldorf Managing Director"},' +
    '{ "page_element": "businessModel-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_gerbitz.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "marketsCustomers-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_wilson.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "engineering-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_peace.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "shopFloorCulture-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_neff.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Mike Neff<br/>Vice President, Operations Swagelok"},' +
    '{ "page_element": "quality-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_rosengarten.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":"Tim Rosengarten<br/>Vice President, Continuous Improvement & Quality Swagelok"},' +
    '{ "page_element": "manufacturing-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_dumm.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "associates-video", "videofile":"/presentation/_Content/videos/swagelok_video_artAnton.mp4", "posterfile":"/presentation/_Content/videos/video_rhodes.jpg", "subtitlefile":"/presentation/_Content/videos/swagelok_video_artAnton.vtt", "caption":""},' +
    '{ "page_element": "globalSourcing-video", "videofile":"/presentation/_Content/videos/distributor_video_andreas.mp4", "posterfile":"/presentation/_Content/videos/video_gerbitz.jpg", "subtitlefile":"/presentation/_Content/videos/distributor_video_andreas.vtt", "caption":"A Word from Andreas<br/>Swagelok D&uuml;sseldorf Managing Director"}' +
    ']';

var layoutsList = '[' +
    '{"page_id":"technicalSupportSales", "page_layout":"text-image"},' +
    '{"page_id":"training", "page_layout":"text-image"},' +
    '{"page_id":"services", "page_layout":"text-image"},' +
    '{"page_id":"delivery", "page_layout":"text-image"},' +
    '{"page_id":"customSolutions", "page_layout":"text-image"},' +
    '{"page_id":"applications", "page_layout":"text-video"}' +
    ']';

var content = '[' +
    '{"page_id":"services", "page_element":"right-custom-content", "html":"<p>Quality, efficiency, and safety are the leading elements of our service portfolio. We deliver optimized support for our customers when selecting, ordering, using, and maintaining our fluid system components. Our objective is to guarantee the smooth and efficient functionality of all Swagelok components and Custom Solutions. <h3>Services-Portfolio</h3> <ul> <li>Custom Solutions <ul><li>Creating individual applications at highest Swagelok quality</li> <li>External workbench for our customers – one competent partner throughout the whole project lifecycle</li> <li>Reducing time and costs for planning, purchasing, and assembling </li> </ul> </li> <li>eBusiness <ul><li>Swagelok eStore</li> <li>Customized eBusiness solutions that can reduce ordering time </li> <li>CAD templates and sales drawings – ability to download high-quality, original CAD drawings</li> </ul></li> <li>Product Selection Tool <ul><li>eDTR Tool (Electronic Desktop Technical Reference), our electronic Swagelok catalogue  </li> <li>Available on USB flash drive or as an app</li> </ul></li> <li>Energy Management Services <ul><li>Identifying and analyzing leaks in a facility</li> <li>Providing a solution that helps target the problems </li> </ul></li> <li>Equipment and Tools <ul><li>For a trouble-free installation and maintenance, we offer Swagelok tools and equipment, either for rent or for sale </li></ul> <li>Product Delivery Services <ul><li>Just-in-time delivery helps our customers reduce the time and cost of maintaining a reliable supply chain</li> <li>Emergency service</li> <li>Delivery 24/7</li> <li>In-house delivery service</li> </ul> <li>Supply Chain Management <ul><li>Consignment stock – weekly delivery</li> <li>VMI (Vendor-Managed Inventory)</li> <li>Barcode scanner for consignment stock at Siemens</li> <li>Custom Kitting – pre-packing of several components according to customer needs</li> </ul> <li>Training <ul><li>Training and Competence Center</li> <li>On-site training at customer facilities</li> </ul></li></ul>"},' +
    '{"page_id":"services", "page_element":"page-title", "html":"<p>Services</p>"},' +
    '{"page_id":"services", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/services.jpg"},' +
    '{"page_id":"technicalSupportSales", "page_element":"page-title", "html":"Swagelok Düesseldorf: Your Partner in Fluid System Solutions."},' +
    '{"page_id":"technicalSupportSales", "page_element":"right-custom-content", "html":"<p>Our goal is to build on our long-term partnerships with customers. Swagelok Düesseldorf stands for trust, loyalty, fairness, and team spirit. Our customers can count on us every day and every time. As knowledgeable consultants, we want to support customer business issues with our know-how and extensive experience in the area of fluid system technology. <p>Our sales approach is based on key account management rather than area management. We place great emphasis on professionalism and intensive, personal, on-site support. Knowing that different businesses have individual needs and requirements, we have built two outside sales teams related to the key MRO and OEM markets. Our specialized key account professionals are well known for their deep understanding of business needs in their designated sales areas. <p>Because of our solid expertise, we can support customers in reaching their goals, even in the most demanding situations. Our complete sales force is made up of outside and inside teams working together to deliver the best support during the entire selection and ordering process. The result is a perfect working solution that offers a real added value to our customers, whether it’s a small fluid system component or a complex Custom Solution project. <p>To be successful in the future, our main goal is to look for the right trend and aspire to be a “trendsetter” for our local businesses. To fulfill our vision, we need to be aware of overall customer business, directions, and major demands."},' +
    '{"page_id":"technicalSupportSales", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/technicalSupport.jpg"},' +
    '{"page_id":"training", "page_element":"page-title", "html":"Think ahead. Share knowledge. Improve customer competency."},' +
    '{"page_id":"training", "page_element":"right-custom-content", "html":"<p>Professional training is an essential part of our quality approach toward our customers. We keep our fluid system expertise up to date and like to share our know-how with our customers through our Training and Competence Center. We offer hands-on training, combining theoretical knowledge with best practices experiences. <p>Improving the safety of people and the environment as well as increasing productivity are essential to us. We support our customers in developing their competencies and raising their sense of responsibility in working with fluid systems. That is why we are continuously improving our training programs to offer knowledge that helps our customers achieve their business goals and improve their overall understanding of fluid system technology. <h3>Training Programs</h3> <ul> <li>Swagelok Tube Fitting Safety Seminar</li> <li>Valve Selection Seminar</li> <li>Orbital Weld Seminar</li> <li>RHPS Seminar</li> <li>Sampling System Seminar</li> </ul>"},' +
    '{"page_id":"training", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/training.jpg"},' +
    '{"page_id":"delivery", "page_element":"page-title", "html":"Delivery"},' +
    '{"page_id":"delivery", "page_element":"right-custom-content", "html":"<p>Product availability is important to the smooth operation of any business. Our goal is to offer our customers a high level of flexibility by ensuring that Swagelok products arrive at the right time and place, avoiding downtime or additional freight charges. Swagelok Düesseldorf manages a large local product inventory to ensure product availability to match customers’ needs. <p>Just-in-time delivery is not a problem for us. Our sales representative will personally ensure that products are available on time. We offer next-day delivery as well as weekly direct delivery through our own service. <p>For customers who like to have products available on-site, we offer consignment inventory filled up on a weekly basis to hold down costs and keep product availability high. We also manage the Swagelok inventory at our customers’ sites to guarantee availability."},' +
    '{"page_id":"delivery", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/delivery.jpg"},' +
    '{"page_id":"customSolutions", "page_element":"page-title", "html":"Your idea + Swagelok products & expertise = Perfect solution."},' +
    '{"page_id":"customSolutions", "page_element":"right-custom-content", "html":"<p>We create innovative Swagelok Custom Solutions that help customers reduce their time and costs for planning, purchasing, and assembling. At our local Custom Solutions Center, we combine the experience of our sales engineers and CAD specialists with the know-how of our assembly team to meet the unique needs of individual applications. Whether the project is simple or complex, our team will deliver the best service to solve all assembly requirements. <p>We make it easy to coordinate entire projects with one partner, utilizing Swagelok Düesseldorf as an extended workbench. We set up our Custom Solutions department in a way that enables us to provide state-of-the-art system assemblies and ask the right questions to make each project successful. To match experience with custom solutions, we have two designated CS key account managers who coordinate CS projects with the customer and our inside CS team. We want to make Swagelok Düesseldorf top of mind when it comes to our customers’ individual applications. By providing world-class solutions backed by world-class processing and service, we can deliver the highest Swagelok quality to every application."},' +
    '{"page_id":"customSolutions", "page_element":"left-custom-image", "src":"' + presentationDirectory + 'images/customSolutions.jpg"}' +
    ']';

get_available_markets(marketList);
get_custom_content(layoutsList, content);

if (localStorage.getItem('pageLayout') == 'text-video' || localStorage.getItem('pageLayout') == 'mission' || localStorage.getItem('pageLayout') == 'splash') {
    get_video_details(videoList);
}

