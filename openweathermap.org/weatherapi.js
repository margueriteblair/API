document.addEventListener("DOMContentLoaded", function () {

    //http://api.openweathermap.org/data/2.5/weather?id=4930956&appid=28b070462390d4739c7761be2c99d179

    // const url = "https://api.github.com/users"
    // const url = "https://api.openweathermap.org/data/2.5/weather"
    // const zeq = "?zip="
    // let zipCode = ""
    // const countryCode = ",us"
    // const appId = "&appid=";
    // const apiKey = "28b070462390d4739c7761be2c99d179";

    const city = '4930956';

    document.getElementById("button").addEventListener("click", getWeather);

    function getWeather() {
        const url = "https://api.openweathermap.org/data/2.5/weather"
        const zeq = "?zip="
        let zipCode = ""
        const countryCode = ",us"
        const appId = "&appid=";
        const apiKey = "28b070462390d4739c7761be2c99d179";
        const city = '4930956';
    
        zipCode = (document.getElementById("zipCode").value)
        if (zipCode.length != 5) {
            alert(`Put in a valid zipcode.`)
        } else {
            let combinedURL = url+zeq+zipCode+countryCode+appId+apiKey;
            console.log(combinedURL)
            const xhr = new XMLHttpRequest();
            xhr.open("GET", combinedURL, true);
    
            xhr.onload = function() {
                if (this.status === 200 && this.readyState === 4) {
                    console.log(this.responseText)
                    let json = JSON.parse(this.responseText);
                    let jsonValues = Object.values(json);
                    let jsonKeys = Object.keys(json)
                    console.log(jsonKeys)
                    console.log(jsonValues)
                } else if (this.status === 404) {
                    console.log("404 Error!")
                }
            }
            xhr.send();
        }
    
        }
        // console.log((document.getElementById("zipCode").value))

})