document.getElementById("button").addEventListener("click", () => {
    let typesArray = ["triva", "math", "date", "year"]
    let numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8"]
    // typesArray.sort(function() {
    //     console.log(.5 - Math.random());
    //     console.log(typesArray);
    // });
    let type = typesArray[Math.floor(Math.random()*typesArray.length)];
    let number = numbersArray[Math.floor(Math.random()*numbersArray.length)];
    // console.log(typesArray[(Math.floor(Math.random()*typesArray.length))]);
    // console.log(numbersArray[Math.random()*numbersArray.length])
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