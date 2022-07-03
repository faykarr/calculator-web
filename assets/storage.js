const CACHE_KEY = "calculation_history";

function checkForStorage() {
    return typeof (Storage) !== "undefined";
}

function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) !== null) {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        } else {
            historyData = [];
        }

        historyData.unshift(data);

        if (historyData.length > 10) {
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }

}

function showHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const historyData = showHistory();
    let number = 1;
    let historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    historyData.forEach(function (item) {
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + number + "</td>";
        row.innerHTML += "<td>" + item.firstNumber + " " + item.operator + " " + item.secondNumber + "</td>";
        row.innerHTML += "<td>" + item.result + "</td>";
        historyList.appendChild(row);
        number++;
    });
}

function removeHistory() {
    if (checkForStorage()) {
        localStorage.removeItem(CACHE_KEY);
    }
    renderHistory();
}

renderHistory();