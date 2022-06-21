let displayNumber = document.getElementById('displayNumber');

function ins(num) {
    if (displayNumber.innerText == '0') {
        displayNumber.innerText = num;
    } else {
        displayNumber.innerText += num;
    }
}

function equals() {
    displayNumber.innerText = eval(displayNumber.innerText);
}

function clr() {
    displayNumber.innerText = '0';
}