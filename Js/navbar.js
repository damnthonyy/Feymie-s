const $btnOpen = document.querySelector(".btn-open-menu");
const $btnClose = document.querySelector(".btn-close-menu");
const $overlay = document.querySelector(".nav-link-overlay");

function toggle() {
    const $overlay = document.querySelector(".nav-link-overlay");
    $overlay.classList.toggle("isActive");
}

$btnOpen.onclick = function () {
    toggle();
}
$btnClose.onclick = function () {
    toggle();
}



