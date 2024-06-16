let number = 0;
document.getElementById("number").innerHTML =number;


document.getElementById("button3").onclick = function(){
    number++;
    document.getElementById("number").innerHTML =number;
}

document.getElementById("button2").onclick = function(){
    number = 0;
    document.getElementById("number").innerHTML =number;
}

document.getElementById("button1").onclick = function(){
    number--;
    document.getElementById("number").innerHTML =number;
}