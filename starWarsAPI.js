document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", loadText);

    function loadText() {
        const xml = new XMLHttpRequest();
        xml.open("GET","http://swapi.dev/api/planets/3/",true)

        xml.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                const json = JSON.parse(this.responseText);
                console.log(json)
                const jsonArrayKey = Object.keys(json)
                const jsonArrayVal = Object.values(json)
                document.getElementById("dataOutput").innerHTML = json.name;
                console.log(Object.entries(json))
                // let html = "<ul>"
                //     html += `<li>${json.rotation_period}</li>`
                //     html += `<li>${json.orbital_period}</li>`
                //     html += `<li>${json.diameter}</li>`
                //     html += `<li>${json.climate}</li>`
                // html = html + "</ul>"
                let html = "<ul>"
                for (let i = 0; i < jsonArrayKey.length; i++) {
                    html += `<li>${jsonArrayKey[i]}: ${jsonArrayVal[i]}</li>`
                }
                html = html + "</ul>"
                document.getElementById("dataDetail").innerHTML = html;
            } else if (this.status === 404) {
                document.getElementById("dataOutput").innerText = "404: Error not found"
            }
        }
        xml.send();
    }
})