document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button").addEventListener("click", loadText)
        function loadText() {
            const xhr = new XMLHttpRequest();
            console.log(xhr)
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const responseJSON = JSON.parse(this.responseText)
                    console.log(responseJSON)
                    document.getElementById("dataOutput").innerHTML = responseJSON[0].login;
                    let html = "<ul>"
                    for (let i = 0; i < responseJSON.length; i++) {
                         html += `<li>${responseJSON[i].login}</li>`
                    }
                    html = html + "</ul>"
                    document.getElementById("dataOutput").innerHTML = html
                } else if (this.status === 404) {
                    document.getElementById("dataOutput").innerText = "404 Error: file not found"
                }
        }
        xhr.open("GET", "https://api.github.com/users", true)
        xhr.send();
        };
})