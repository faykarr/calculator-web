// Hovering in app-name section
const app_name = document.querySelector('.app-name');
const copyright = document.querySelector('.copyright');
app_name.addEventListener("mouseover", mouseOver);
app_name.addEventListener("mouseout", mouseOut);

function mouseOver() {
    copyright.style.display = "inline";
}

function mouseOut() {
    copyright.style.display = "none";
}

// On click history button
const history = document.querySelector('.history');
const search_icon = document.querySelector('.search');
const close = document.querySelector('.close');
// search_icon.addEventListener("click", function () {
//     history.style.display = "block";
// });
search_icon.addEventListener("click", function () {
    history.classList.toggle("hidden");
});

close.addEventListener("click", function () {
    history.classList.toggle("hidden");
});