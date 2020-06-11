document.getElementById("geolocation").addEventListener("click", geolocate);

function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
}

function onGeolocateSuccess(coordinates) {
    const {latitude, longitude} = coordinates.coords;
    console.log(`Found coordinates: ${latitude}, ${longitude}`)
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