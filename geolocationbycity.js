document.getElementById("button").addEventListener("mouseup", geolocate);

function geolocate() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let apiKey = "AIzaSyAIoZqMZwFMADKiEZTz78lfJbC3Q0rqWWA"
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
    console.log(`${longitude}, ${latitude}`)
    console.log(position)
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (this.status === 200 && this.readyState === 4){
            let jsonParseResult = JSON.parse(this.responseText)
            console.log(jsonParseResult.results[6].formatted_address) //check if this is standard across all locations;
            document.getElementById("output").innerHTML = jsonParseResult.results[6].formatted_address
            let xhr2 = new XMLHttpRequest();
            xhr2.open("GET", `https://serpapi.com/playground?q=${jsonParseResult.results[6].formatted_address}&tbm=isch&ijn=0`, true);
            xhr2.onload = function() {
                if (this.status === 200 && this.readyState === 4){
                    // console.log(this.responseText)
                    // console.log(JSON.parse(this.responseText))
                    // document.getElementById("img").innerHTML = this.responseText;
                    // 'use strict';
                    // let https = require('https');
                    // let subscriptionKey = "";
                    // let host = 'api.cognitive.microsoft.com';
                    // let path = '/bing/v7.0/images/search';
                    // let term = `${jsonParseResult.results[6].formatted_address}`;

                    // let request_params = {
                    //     method: 'GET',
                    //     hostname: host,
                    //     path: path: {
                    //         'Ocp-Apim-Subscription-Key': subscriptionKey,
                    //     }s
                    // };
                } else if (this.status === 404) {
                    console.log(`Error! 404 Status.`)
                }
            }
            xhr2.send();
        } else if (this.status === 404){
            console.log(`Error! 404.`) //anything to do with the timestamp?
        }
    }
    xhr.send();
}

function error(position) {
    console.warn(`help`)
}

