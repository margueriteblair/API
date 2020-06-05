document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button").addEventListener("click", loadText)
        function loadText() {
            const xhr = new XMLHttpRequest();
            console.log(xhr)
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("dataOutput").innerHTML = this.responseText;
                }
        }
        xhr.open("GET", "fakeurldata.txt", true)
        xhr.send();
        };
})