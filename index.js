

//DOM - Document Object Model 
//Document - interacting with HTML document
//Object - document kep word in javascript is object
//model - representation 
//how you use javascript to modify a website
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0

}

