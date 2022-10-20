// 5-Day Forecast API call //
// Added Lat and Lon for ATX, Added imperial units //
var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=30.2672&lon=97.7431&appid=655f440e2edd3fdcfbfbcd81a9465bc3';

fetch('http://api.openweathermap.org/data/2.5/forecast?Austin,us&units=imperial&lat=30.2672&lon=-97.7431&appid=655f440e2edd3fdcfbfbcd81a9465bc3', {
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
