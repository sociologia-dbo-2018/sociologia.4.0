import {db} from '../modules/fb.js'
export const loadMap = () => {
    const divMap = document.querySelector('#mapIndex');
    const googleMaps = require('google-maps');
    
    // Settings
    googleMaps.KEY = 'AIzaSyCjXATdQN6e_SpQXrEwIagb2pxE8DjG3IQ';
    googleMaps.LIBRARIES = ['geometry', 'places', 'visualization'];
    googleMaps.LANGUAGE = 'br';        

        
    googleMaps.load(function (google) {
        const map = new google.maps.Map(divMap, {
            zoom: 14,
            maxZoom: 17,
            minZoom: 2
        });
        db.ref('/markers').once('value').then(function(markers) {
            let osbagulho = markers.val();
            console.log(osbagulho); //json com todos os lat e lgn
            
            let values = [];
            for (let i = 0; i < Object.keys(osbagulho).length; i++){
              let value = osbagulho[Object.keys(osbagulho)[i]];
              values[i] = value
              let namevalue = Object.keys(osbagulho);
            }
            // console.log(namevalue);
            console.log(values);
            console.log(values[1].latLong); //vem 1 lat e lgn só da
            // maneira pra entrar no marker já
            
        });
        for (let i = 0; i <= values.length; i++) {  //for pra cada rodagem 
            let latLng = values[i].latLong;
            console.log(latLng)
            let marker = new google.maps.Marker({
              position: latLng, //iniciar marker
              map: map
            });
        }
    });
};
