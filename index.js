function changebgw() {
    document.body.style.background = "white";
    let elm = document.getElementsByClassName("text");
    for (let i of elm) {
        i.style.color = "black";
    }
}

function changebga() {
    document.body.style.background = "aqua";
    let elm = document.getElementsByClassName("text");
    for (let i of elm) {
        i.style.color = "black";
    }
}

function changebgv() {
    document.body.style.background = "violet";
    let elm = document.getElementsByClassName("text");
    for (let i = 0; i < elm.length; i++) {
        elm[i].style.color = "black";
    }
}

function changebgb() {
    document.body.style.background = "black";
    let elm = document.getElementsByClassName("text");

    for (let i = 0; i < elm.length; i++) {
        elm[i].style.color = "white";
    }


}