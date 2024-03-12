var map = L.map("map", {
            center: [0,0],
            zoom: 2.5,
          });

var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.addLayer(layer);

url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
d3.json(url).then(function(data) {
    let features = data.features;

    let earthquakeMarkers = [];

    let colourArray = ["#DAF7A6", "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845"];
    var radiusArray = [2,4,6,8,10,12];

    function colourScale(depth){
        if (depth < 10) return colourArray[0];
        else if (depth < 30) return colourArray[1];
        else if (depth < 50) return colourArray[2];
        else if (depth < 70) return colourArray[3];
        else if (depth < 90) return colourArray[4];
        else return colourArray[5];
    };

    function radiusScale(mag){
        if (mag < 1) return radiusArray[0];
        else if (mag < 2) return radiusArray[1];
        else if (mag < 3) return radiusArray[2];
        else if (mag < 4) return radiusArray[3];
        else if (mag < 5) return radiusArray[4];
        else return radiusArray[5]
    };

    function geojsonMarkerOptions(feature) {
        radius: radiusScale(feature.properties.mag);
        fillColor: colourScale(feature.geometry.coordinates[2]);
        color: "#000";
        weight: 1;
        opacity: 1;
        fillOpacity: 0.8
    };

    L.geoJSON(features, {
        pointToLayer: function(feature, earthquakeMarkers) {
            return L.circleMarker(earthquakeMarkers, geojsonMarkerOptions).bindPopup("<h3> Magnitude: " + feature.properties.mag + "</h3><h3> Depth: " + feature.geometry.coordinates[2] + "</h3>")
        }
        style: geojsonMarkerOptions;
    }).addTo(map);

    


    for (let i = 0; i < features.length; i++){

        let coord = features[i].geometry.coordinates;

        let markerCoord = [coord[1], coord[0]];
        earthquakeMarkers.push(markerCoord);

        let dep = coord[2];

        let mag = features[i].properties.mag;
        
          
    };
  
    // // Set up the legend.
    // let legend = L.control({ position: "bottomright" });
    // legend.onAdd = function() {
    //     let div = L.DomUtil.create("div", "info legend");
    //     let limits = [-10, 10, 30,50,70,90,500];
    //     let colors = geojson.options.colors;
    //     let labels = [];

    //     // Add the minimum and maximum.
    //     let legendInfo = "<h1>Population with Children<br />(ages 6-17)</h1>" +
    //     "<div class=\"labels\">" +
    //         "<div class=\"min\">" + limits[0] + "</div>" +
    //         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
    //     "</div>";

    //     div.innerHTML = legendInfo;

    //     limits.forEach(function(limit, index) {
    //     labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    //     });

    //     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    //     return div;
    // }
    // //Adding the legend to the map
    // legend.addTo(map);
});