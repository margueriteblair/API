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
            let location = jsonParseResult.results[6].formatted_address;
            let apiKey2 = "388752b0-b1e7-11ea-8ea7-3dd0050eb327"
            let url2 = `https://app.zenserp.com/api/v2/search?apikey=${apiKey2}&q=${location}&tbm=isch&device=desktop&location=Manhattan,New%20York,United%20States`
            let xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url2, true);
            xhr2.onload = function() {
                if (this.status === 200 && this.readyState === 4){
                    console.log(JSON.parse(this.responseText))
                    // document.getElementById("img").innerHTML = this.responseText;
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

