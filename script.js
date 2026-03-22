let data = ""
let screen = document.getElementById("screen")

function add(val){
    data += val
    screen.value = data
}

function clearAll(){
    data = ""
    screen.value = ""
}

function removeOne(){
    data = data.slice(0, -1)
    screen.value = data
}

function answer(){
    try{
        data = eval(data).toString()
        screen.value = data
    }
    catch{
        screen.value = "Error"
        data = ""
    }
}

/* ======================
   KEYBOARD SUPPORT
====================== */

window.addEventListener("keydown", function(e){

    let key = e.key

    // numbers
    if(key >= "0" && key <= "9"){
        add(key)
    }

    // operators
    if(key === "+" || key === "-" || key === "*" || key === "/"){
        add(key)
    }

    // brackets
    if(key === "(" || key === ")"){
        add(key)
    }

    // decimal
    if(key === "."){
        add(".")
    }

    // enter = calculate
    if(key === "Enter"){
        e.preventDefault()
        answer()
    }

    // backspace = delete
    if(key === "Backspace"){
        removeOne()
    }

    // escape = clear
    if(key === "Escape"){
        clearAll()
    }
})