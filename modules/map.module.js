export const loadMap = () => {
    const divMap = document.querySelector('#mapIndex');
    const googleMaps = require('google-maps');
        // Settings
        googleMaps.KEY = 'AIzaSyCjXATdQN6e_SpQXrEwIagb2pxE8DjG3IQ';
        googleMaps.LIBRARIES = ['geometry', 'places', 'visualization'];
        googleMaps.LANGUAGE = 'br';
    
    
        googleMaps.load(function (google) {
            const map = new google.maps.Map(divMap, {
                zoom: 14
            });
            const markers = [];
            navigator.geolocation.getCurrentPosition(function (position) {
                map.setCenter(new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude));
            });
            google.maps.event.addListener(map, 'click', function (e) {
                // if (document.URL.includes('report')) {
                const marker = new google.maps.Marker({
                    position: e.latLng,
                    map: map,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: '#00FFFF',
                        fillOpacity: .2,
                        strokeColor: 'white',
                        strokeWeight: .5,
                        scale: 30
                    }
                });
                const latLong = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                markers.push(latLong);
                console.log(markers);
                // } else { }
            });
        });
} 