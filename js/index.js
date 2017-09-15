var weatherData = "",uvData="";
$(function () {
    navigator.geolocation.getCurrentPosition(function (location) {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);

        ///*weather*/
        //$.get("http://api.openweathermap.org/data/2.5/weather?lat=" + location.coords.latitude + "&lon=" + location.coords.longitude +"&appid=4b57e1c4d2edc6f01c8cb793bdea71ea", function (data) {
        //    console.dir(data);
        //    weatherData = data;
        //});

        ///*UV*/
        //$.get("http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + location.coords.latitude + "&lon=" + location.coords.longitude + "&appid=4b57e1c4d2edc6f01c8cb793bdea71ea", function (data) {
        //    console.dir(data);
        //    uvData = data;
        //});

        $.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314", function (data) {
            console.dir(data);
            uvData = data;
        });

    });

})

