"use strict"

const ClickMe = document.getElementById("button1")

ClickMe.addEventListener("click", () => {
    alert("Your computer has been compromised!")
})

const randomNumberButton = document.getElementById("button2")
const numberDisplay = document.getElementById("numberDisplay")

randomNumberButton.addEventListener("click", () => {
    numberDisplay.textContent = Math.floor(Math.random()*99)
})
const RedirectButton = document.getElementById("button3")

const duplicateButton = document.getElementById("DuplicateButton")
const dotContainer = document.getElementById("dotContainer")
duplicateButton.addEventListener("click", () => {
    const newDot = document.createElement("div")
    newDot.classList.add("dot");
    dotContainer.appendChild(newDot);
})

let lastkey;
document.addEventListener("keypress", (event) => {
    console.log(event);
    if(lastkey === 'KeyR' && event.code === 'KeyA'){
        window.open("https://www.youtube.com/channel/UCTsLNOp1BUp8gAX9Ru3rpgQ","_blank")
    }
    lastkey = event.code;
})