document.getElementById("button").addEventListener("mouseup", geolocate);

function geolocate() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${YOUR_API_KEY}`
    console.log(`${longitude}, ${latitude}`)
    console.log(position)
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (this.status === 200 && this.readyState === 4){
            console.log()
        } else if (this.status === 404){
            console.log(`Error! 404.`)
        }
    }
}

function error(position) {
    console.warn(`help`)
}

// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452
// &location_type=ROOFTOP&result_type=street_address&key=YOUR_API_KEY