var APIKey = "b7f3a42edd03800bbd2a49ee7ab27d01";
var city = [];
var x = 0;
var previousCity;

$('#searchBtn').on('click', function (event) {
    console.log("click");
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
            $(".weatherDisplay").empty();
            $(".weatherDisplay2").empty();
            console.log(response);

            var icon = response.weather[0].icon;
            var cityName = response.name;
            var createIcon = $("<img class='weatherIcon' src=http://www.openweathermap.org/img/wn/" + icon + ".png alt='Weather Icon'>");
            var windSpeed = response.wind.speed;
            var humidity = response.main.humidity;
            var temperature = response.main.temp

            city.push(cityName);
            console.log("city array: " + city);


            $(".wrapper").addClass("color");
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
    displayOldSearch();

});

function displayOldSearch() {
    $(".oldSearches").empty();
    // shouldn't this loop through all of the city array? only showing previous one...
    for (var i = 0; i < city.length; i++) {

        var oldCity = city[i];
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
            "q=" + oldCity + "&units=imperial&appid=" + APIKey;
        event.preventDefault()
        console.log("previous searches: " + oldCity);



        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (oldSearchResponse) {
                // 
                

                console.log(oldSearchResponse);

                var oldIcon = oldSearchResponse.weather[0].icon;
                var oldCityName = oldSearchResponse.name;
                var oldCreateIcon = $("<img class='weatherIcon' src=http://www.openweathermap.org/img/wn/" + oldIcon + ".png alt='Weather Icon'>");
                var oldWindSpeed = oldSearchResponse.wind.speed;
                var oldHumidity = oldSearchResponse.main.humidity;
                var oldTemperature = oldSearchResponse.main.temp

                $(".oldSearches").addClass("color");
                $(".oldSearches").append("<h6>Previous Search:</h6>");
                $(".oldSearches").append("City: " + oldCityName);
                $(".oldSearches").append(oldCreateIcon);
                $(".oldSearches").append("<br>");
                $(".oldSearches").append("Wind Speed: " + oldWindSpeed + "MPH <br>");
                $(".oldSearches").append("Temperature: " + oldTemperature + "°F <br>");
                $(".oldSearches").append("Humidity: " + oldHumidity + "%<br><br>");

            });
    }

}

