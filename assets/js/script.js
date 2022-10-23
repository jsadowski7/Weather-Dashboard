// 5-Day Forecast API call //
// Added Lat and Lon for ATX, Added imperial units //
//var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=30.2672&lon=97.7431&appid=655f440e2edd3fdcfbfbcd81a9465bc3';
var city = "";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var APIKey = "655f440e2edd3fdcfbfbcd81a9465bc3";
var units = "units=imperial&";
var lat = "lat=30.2672&";
var lon = "lon=-97.7431&";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" + units + lat + lon + "APPID=" + APIKey;

console.log(queryURL);

fetch(queryURL, {
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
   console.log(data);
 });




function displayWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim()!=="") {
        city = searchCity.val().trim();
        currentWeather(city);
    }
  }

