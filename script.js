var lat1 = sessionStorage.getItem('lat');
    var lang1 = sessionStorage.getItem('long');
    console.log("lat :" + lat1 + " lang :" + lang1);
    var map;

    console.log("lat :" + lat1 + " lang :" + lang1);
    function myMap() {

      var loc = {};

      if (lat1 != undefined && lang1 != undefined) {
        var mapProp = {
          position: { lat: lat1, lng: lang1 },
          center: new google.maps.LatLng(lat1, lang1),
          //center: { lat: lat1, lng: lang1 },
          zoom: 20,

        };


        map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
      }
      var request = {
        location: new google.maps.LatLng(lat1, lang1),
        radius: '500',
        type: ['restaurant']
      };
      //service = new google.maps.places.PlacesService(map);
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({location: new google.maps.LatLng(lat1, lang1),
        radius: '500',
        type: ['restaurant']}, callback);

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            //createMarker(results[i]);
          }

        }
      }
    }