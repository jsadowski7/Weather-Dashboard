// 5-Day Forecast API call //
// Declare variable to store searched city 
var city = "";

var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature")
var currentHumidity = $("#humidity")
var currentWindSpeed = $("#wind-speed")

// Searches city to see if it exists in entries from local storage
var sCity = [];

function find(c) {
    for (var i = 0; i < sCity.length; i++) {
        if(c.toUpperCase() === sCity[i]) {
            return -1;
        } 
    }
    return 1;
}

// Parameter var(s) for API call
var units = "units=imperial&";
var lat = "lat=30.2672&";
var lon = "lon=-97.7431&";
var queryURL ="http://api.openweathermap.org/data/2.5/forecast?" + units + lat + lon + "APPID=" + APIKey;
var APIKey ="655f440e2edd3fdcfbfbcd81a9465bc3";

console.log(queryURL);

fetch(queryURL, {
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
   console.log(data);
 });
 

// Also attempted to call with ajax

// function displayWeather(event) {
//     event.preventDefault();
//     if (searchCity.val().trim()!=="") {
//         city = searchCity.val().trim();
//         currentWeather(city);
//     }
//   }

//  function currentWeather(city) {
//     var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" + units + lat + lon + "APPID=" + APIKey;
//     $.ajax({
//         url: queryURL,
//         method: "GET",
//     }).then(function(response) {
//         console.log(response);
        
//         var weatherIcon= response.weather[0].icon;
//         var iconUrl="https://openweathermap.org/img/wn/"+weatherIcon +"@2x.png";
//         var date=new Date(response.dt*1000).toLocaleDateString();
//         $(currentCity).html(response.name +"("+date+")" + "<img src="+iconUrl+">");
        
//     })
// }



