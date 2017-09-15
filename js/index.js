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

        //$.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314", function (data) {
        //    console.dir(data);
        //    uvData = data;
        //});
        $.ajax({
            type: "get",
            async: true,//async設定false會變成同步請求 要完成ajax後才會繼續執行
            url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314",
            dataType: "jsonp",
            jsonpCallback: "?", //callback函式(jsonp的callback函式，預設是callback)
            success: function (json) {
                //jQuery會自動將結果傳入(如果有設定callback函式的話，兩者都會執行)
                alert('success');
                console.log(json);
            },
            error: function () {
                alert('fail');
            }
        });
    });

})

