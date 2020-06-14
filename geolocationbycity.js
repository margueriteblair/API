document.getElementById("button").addEventListener("mouseup", geolocate);

function geolocate() {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    console.log(`${longitude}, ${latitude}`)
    console.log(position)
}

function error(position) {
    console.warn(`help`)
}