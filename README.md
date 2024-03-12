# leaflet-challenge
Repository for Module 15 - Mapping
# Summary
In this challenge, a HTML representation was created to display earthquake data obtained by United States Geological Survey (USGS). The representation coded in Javascript and outputted as a GeoJSON HTML that can be viewed in a web browser.
## Data
The data was obtained from the USGS json url file over the current past 7 days (link below). The dataset contains all earthgquake instances recorded around the world and seperated into three dictionaries; type, metadata, and features. The data used for the purpose of this visualisation was:
* features.properties.mag - providing the magnitude of the recorded earthquake
* features.geometry.coordinates - a list of three values, each values representing the earthquakes longitude, latitude, and depth. \

Link to obtain json data file; https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
## Output
The javascript code, located in Leaflet-Part-1.static.js.logic.js, utilises the leaflet library to display a geographical map of the world, and reads in the USGS earthquake data using the d3 library. The earthquake location is then plotted showing the following information at each marker:
* marker size indicating magnitude of the earthquake (larger the marker radius, greater the earthquake magnitude)
* marker colour indicating earthquake depth, referring to the scale showing that light green marker is shallow depth (below 10) to the dark purple as a depth of greater than 90
* popup when a marker is selected displaying that earthquakes magnitude and depth.

This map can be viewed as a html file, located at Leaflet-Part-1.index. 
## Running
This challenge is available at the following github page; https://bradfisher18.github.io/leaflet-challenge/ \
Alternatively, to access the index.html file, a web browser is required.\
To view the Javascript code, select inspect within the browser and select the Sources tab. If preferred, an easier editor is Visual Studio Code (link to install below). \
The leaflet library is also required for the map to be displayed and can be downloaded here; https://leafletjs.com/download.html \
Visual Studio Code install: https://code.visualstudio.com/download
