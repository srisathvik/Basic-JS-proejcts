function changeColor(e){
    console.log("color", click.style);
    click.style.backgroundColor  = "rgb(" + createNumber() + "," + createNumber() + "," + createNumber() + ")";
    body.style.backgroundColor  = click.style.backgroundColor;
    document.querySelector(".color").innerHTML = "BackGround Color: " + click.style.backgroundColor;
}
function createNumber(){
    let min = 0;
    let max = 255;
    return Math.random() * (max - min) + min;
}
var body = document.querySelector("body")
var click = document.querySelector(".click");
click.addEventListener("click", changeColor);
click.addEventListener("mouseover", (e)=>{
    click.style.backgroundColor = "black";
    click.style.changeColor = "white";
})