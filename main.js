$hamburger = document.querySelector(".Burger-content")
$Menu = document.querySelector(".Burger-content");
$body = document.body;
$Close = document.querySelector(".Close-content")

function Toggle() {
    $NavBar = document.querySelector(".NavLink-content ");
    $NavBar.classList.toggle("active");
}

function Opacity() {
    $body = document.body;
    $body.classList.toggle("opacity");
}

$Close.onclick = function () {
    Toggle();
    Opacity();
}

$hamburger.onclick = function () {

    Toggle();
    Opacity();

}