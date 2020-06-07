//you want your code to execute only once your page has finished loading
//this is why we attach the event listener DOMContentLoaded()

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("getMessage").onclick = function() {
        console.log("Hello World")
    }
})