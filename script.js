var navLinks = document.getElementById("navLinks");
var barsIcon = document.querySelector(".fa-bars");

function showMenu() {
    navLinks.style.right = "0";
    barsIcon.style.position = "relative";
    barsIcon.style.right = "-200px";
}

function hideMenu() {
    navLinks.style.right = "-200px";
    barsIcon.style.position = "absolute";
    barsIcon.style.right = "20px";
}