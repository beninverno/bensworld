window.onload = function() {
    buttonToStart();
}

function buttonToStart() {
    document.getElementById("st").onclick = function() {
        document.getElementById("st").classList.add("hider");
        document.getElementById("float").play();
        document.getElementsByTagName("body")[0].classList.toggle("black");
        backgroundFlash();
    }
}

function toggleBG(x) {
    var body = document.getElementsByTagName("body")[0];
    setTimeout(function() {body.classList.toggle("white")}, x);
    setTimeout(function() {body.classList.toggle("white")}, x+100);
}

function backgroundFlash() {
    toggleBG(9195);
    toggleBG(9548);
    toggleBG(10865);
    toggleBG(11081);
    setTimeout(function() {document.getElementsByTagName("body")[0].classList.toggle("space")}, 12664);
    setTimeout(function() {document.getElementById("floattitle").classList.toggle("hider")}, 12664);
    setTimeout(function() {document.getElementsByTagName("h4")[0].classList.toggle("hider")}, 12664);

}

