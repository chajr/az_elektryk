var coordinates = [
    50.489213, 19.419611
];
var mapNode = 'map';

showMap(coordinates[0], coordinates[1]);

function addMark(p1, p2, options, mapa, txt){
    options.position = new google.maps.LatLng(p1, p2);
    options.map = mapa;

    var marker = new google.maps.Marker(options);
    var info = new google.maps.InfoWindow({disableAutoPan:true});

    info.setContent(txt);
    info.open(mapa, marker);

    return marker;
}
function showMap(lat, lan){
    if(lat && lan && document.getElementById(mapNode)){
        var coordinatesObject = new google.maps.LatLng(lat, lan);
        var options = {
            zoom: 16,
            center: coordinatesObject,
            panControl: false,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            noClear: true
        };

        var mainMap = new google.maps.Map(document.getElementById(mapNode), options);

        addMark(
            coordinates[0],
            coordinates[1],
            {title: 'Nazwa firmy'},
            mainMap,
            '<div><div style="float:left;"><b>AZ Elektryk</b></div></div>'
        );
    }
}
