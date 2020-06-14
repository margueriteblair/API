
document.getElementById("submit").addEventListener("click", () => {
    const cityName = document.getElementById("city").value
    console.log(document.getElementById("city").value)
    const apiKey = "28b070462390d4739c7761be2c99d179"
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (this.status === 200 && this.readyState === 4) {
            let jsonResponse = JSON.parse(this.responseText)
            console.log(jsonResponse)
            console.log(jsonResponse.weather[0].main)
            let degreesF = (((jsonResponse.main.temp)-273.15)*(9/5)+32).toFixed(2);
            document.getElementById("response-text").innerHTML = `The weather in ${cityName} today ${jsonResponse.weather[0].main} and it is ${degreesF} F.`;
        }
    }
    xhr.send()
    document.getElementById("city").value = "";
})


