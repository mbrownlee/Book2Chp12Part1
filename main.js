let textBox = document.getElementById("message")
let articlebox1 = document.getElementById("box1")
let articlebox2 = document.getElementById("box2")


textBox.addEventListener("keyup", function (event) {
    articlebox1.innerHTML = event.target.value
    articlebox2.innerHTML = event.target.value
    
    console.log("EVENT")
});





