var weatherData = "", uvData = "";
//http://api.openweathermap.org/img/w/.png
$(function () {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(getInformation,errorCallback);
    } else {
        alert('您的瀏覽器不支援定位功能');
        var gpsData={"coords":{"latitude":'24.1372291',"longitude":'120.6809453'}}
        getInformation(gpsData);
    }

    function getInformation(position){
        ///*weather*/
        console.dir(position);
        $.get("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude +"&units=metric&lang=zh_tw&appid=4b57e1c4d2edc6f01c8cb793bdea71ea", function (data) {
            console.dir(data);
            weatherData = data;
            console.log(weatherData.main.temp);
            console.log(weatherData.weather[0].description);
            console.log(weatherData.weather[0].icon);

            $("#address").html("<h1>" + weatherData.name + "</h1>");
            $("#iconImg").html("<img src='http://api.openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png' />");
            $("#description").html("<h2>" + weatherData.weather[0].description + "</h2>");
        });

        /*UV*/
        $.get("http://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&lang=zh_tw&appid=4b57e1c4d2edc6f01c8cb793bdea71ea", function (data) {
            console.dir(data);
            uvData = data;
            console.log(uvData[0].value);
            $("#uvValue").html("<h2>UV: " + uvData[0].value + "</h2>");
        });
    }

    function errorCallback(error) {
      var errorTypes={
            0:"不明原因錯誤",
            1:"使用者拒絕提供位置資訊",
            2:"無法取得位置資訊",
            3:"位置查詢逾時"
            };
      var gpsData={"coords":{"latitude":'24.1372291',"longitude":'120.6809453'}}
        getInformation(gpsData);
    }

})

