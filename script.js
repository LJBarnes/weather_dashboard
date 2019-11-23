var APIKey = "b7f3a42edd03800bbd2a49ee7ab27d01";
//  ***not working when I substitute this var for the hardcoded one***

// var userSearchTerm = "chicago";





$('#searchBtn').on('click', function (event) {
    var userSearchTerm = $("#search-term").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=" + userSearchTerm + "&units=imperial&appid=" + APIKey;
    event.preventDefault()
    console.log(userSearchTerm);


    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {

            console.log(response);
            var icon = response.weather[0].icon;
            var cityName = response.name;
            var createIcon = $("<img class='weatherIcon' src=http://www.openweathermap.org/img/wn/" + icon + ".png alt='Weather Icon'>");
            var windSpeed = response.wind.speed;
            var humidity = response.main.humidity;
            var temperature = response.main.temp



            $(".weatherDisplay").append("City: " + cityName);
            $(".weatherDisplay").append(createIcon);
            $(".weatherDisplay2").append("Wind Speed: " + windSpeed + "MPH <br>");
            $(".weatherDisplay2").append("Temperature: " + temperature + "°F <br>");
            $(".weatherDisplay2").append("Humidity: " + humidity + "%");


            console.log(temperature);
            console.log(cityName)
            console.log(icon);
            console.log(windSpeed)
            console.log("humidity: " + humidity);

        });
});

// need to fix layout
// Need to save info from search into local/get from local so it stays on refresh. 






// var tempF = (temperature - 273.15) * 1.80 + 32;

