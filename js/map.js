var map, infoWindow, maker;

function initMap() {
    var mapLocation = { lat: -34.397, lng: 150.644 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: mapLocation,
        zoom: 18
    });

    maker = new google.maps.Marker({
        position: mapLocation,
        map: map
    });

    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos); //current location setting
                infoWindow.open(map, maker);
                map.setCenter(pos); // center setting
                maker.setPosition(pos); //position setting
                infoWindow.setContent("Here"); //msg print
            },
            function() {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}
