function changeValue(e){
    // console.log(e.srcElement.innerText);
    if(e.srcElement.innerText == "DECREASE"){
        value.innerText = parseInt(value.innerText) - 1;
        value.style.color = "red";
    }

    else if(e.srcElement.innerText == "RESET"){
        value.innerText = "0";
        value.style.color = "black";
    }

    else{
        value.innerText = parseInt(value.innerText) + 1;
        value.style.color = "green";
    }
}


var value = document.querySelector("h1");


var buttons = document.querySelectorAll(".change");
buttons.forEach(button=>{
    button.addEventListener("click", changeValue)
})