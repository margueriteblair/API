document.getElementById("button").addEventListener("click", () => {
    let types = ["triva", "math", "date", "year"]
    let url = `http://numbersapi.com/${number}/${type}`
    xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        if (this.status===200 && this.readyState === 4){
            document.getElementById("fact").innerHTML = this.responseText;
        } else if (this.status === 404) {
            alert(`404 Error!`)
        }
    }
    xhr.send();
})