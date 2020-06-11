document.getElementById("geolocation").addEventListener("click", geolocate);
// document.getElementById("geolocation").addEventListener("click", )
function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
}

function onGeolocateSuccess(coordinates) {
    const {latitude, longitude} = coordinates.coords;
    console.log(`Found coordinates: ${latitude}, ${longitude}`)

    const url = "http://api.openweathermap.org/data/2.5/weather?"
    const lateq = "lat="
    let latitudeURL = latitude
    const longeq = "&lon="
    let longitudeURL = longitude
    const appid = "&appid="
    let apiKey = "28b070462390d4739c7761be2c99d179"

    let combinedURL = url+lateq+latitudeURL+longeq+longitudeURL+appid+apiKey;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", combinedURL, true);
    xhr.onload = function() {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText)
            let json = JSON.parse(this.responseText)
            console.log(json)
            let degreesF = (((json.main.temp)-273.15)*(9/5)+32).toFixed(2)
            document.getElementById("weatherInformation").innerText = `${json.name} is currently ${degreesF} F.`;
    
        } else if (this.status === 404) {
            console.log(`404 Error!`)
        }
    }
    xhr.send();

}

function onGeolocateError(error) {
    console.warn(error.code, error.message);

    if(error.code === 1) {
        //they said they won't let you use location
    } else if (error.code === 2) {
        //position is unavailable
    } else if (error.code === 3) {
        //timeout
    }
}