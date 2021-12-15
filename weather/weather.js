$(document).ready(function () {
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error() {
    console.log("error");
  }

  function weather(lat, long) {
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
    $.getJSON(URL, function (data) {
      console.log(data);
      updateDOM(data);
    });
  }

  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp);
    var min = Math.round(data.main.temp_min) + "&#176;c";
    var max = Math.round(data.main.temp_max) + "&#176;c";
    var desc = data.weather[0].description;
    var icon = `<img id="icon" src="${data.weather[0].icon}" alt="icon" />`;
    var feel = Math.round(data.main.feels_like) + "&#176;c";
    var humi = data.main.humidity;
    var pres = data.main.pressure;

    $("#city").html(city);
    $("#temp").html(temp);
    $("#min").html(min);
    $("#max").html(max);
    $("#desc").html(desc);
    $("#icondesc").prepend(icon);
    $("#feel").html(feel);
    $("#humi").html(humi);
    $("#pres").html(pres);
  }
});
