let cellNumber = 2;

let K = 1;
let currentPosition = 0;
let listOfCells = [];
let listOfHills = [];

let oldPosition = 0;
let oldK = 0;
let undoPosition = 0;

window.onload = function () {
    document.getElementById('move-minus').disabled = true;
    document.getElementById('moveK').disabled = true;
    document.getElementById('move-plus').disabled = true;
    document.getElementById('undo').disabled = true;
};

function addCells() {
    let cellList = document.getElementById("cell-list");
    let li = document.createElement("li");
    li.setAttribute("onclick", "addHill(this)");
    li.setAttribute("id", cellNumber.toString());
    cellList.appendChild(li);
    cellNumber++;
}

function addHill(e) {
    if (e.innerHTML === '') {
        e.appendChild(document.createTextNode("●"));
    } else {
        e.innerHTML = '';
    }
}

function moveKMinus() {
    document.getElementById("undo").disabled = false;
    oldPosition = currentPosition;
    oldK = K;
    listOfCells[currentPosition].style.backgroundColor = "white";
    K--;
    currentPosition += K;
    listOfCells[currentPosition].style.backgroundColor = "red";
    showInfo();
    checkHills();
}

function moveK() {
    document.getElementById("undo").disabled = false;
    oldPosition = currentPosition;
    oldK = K;
    listOfCells[currentPosition].style.backgroundColor = "white";
    currentPosition += K;
    listOfCells[currentPosition].style.backgroundColor = "red";
    showInfo();
    checkHills();
}

function moveKPlus() {
    document.getElementById("undo").disabled = false;
    oldPosition = currentPosition;
    oldK = K;
    listOfCells[currentPosition].style.backgroundColor = "white";
    K++;
    currentPosition += K;
    listOfCells[currentPosition].style.backgroundColor = "red";
    showInfo();
    checkHills();
}

function checkHills() {
    let kMinus = false;
    let k = false;
    let kPlus = false;
    let hillNumber = 0;
    listOfHills.forEach(function(e) {
        hillNumber = e.id;
        kMinus = ((hillNumber === (currentPosition  + K - 1 ).toString()) || kMinus) && ((K - 1) > 0);
        k = (hillNumber === (currentPosition + K).toString()) || k;
        kPlus = (hillNumber === (currentPosition + K + 1).toString()) || kPlus;
    });
    document.getElementById('move-minus').disabled = kMinus === false;
    document.getElementById('moveK').disabled = k === false;
    document.getElementById('move-plus').disabled = kPlus === false;
    changeButtonNames();
}

function changeButtonNames() {
    document.getElementById("move-minus").value = "Move " + (K - 1);
    document.getElementById("moveK").value = "Move " + K;
    document.getElementById("move-plus").value = "Move " + (K + 1);
}

function start() {
    document.getElementById('move-minus').disabled = false;
    document.getElementById('moveK').disabled = false;
    document.getElementById('move-plus').disabled = false;
    document.getElementById('add-button').disabled = true;
    document.getElementById('start-button').disabled = true;
    listOfCells = Array.from(document.getElementsByTagName('li'));
    listOfCells.forEach(function(li) {
       li.onclick = null;
       if (li.innerHTML === "●") listOfHills.push(li);
    });
    checkHills();
}

function undo() {
    listOfCells[currentPosition].style.backgroundColor = "white";
    K = oldK;
    undoPosition = currentPosition;
    currentPosition = oldPosition;
    listOfCells[currentPosition].style.backgroundColor = "red";
    document.getElementById("undo").disabled = true;
    showInfo();
    checkHills();
}

function showInfo() {
    let cellList = document.getElementById("history");
    let li = document.createElement("li");
    if (currentPosition > oldPosition) {
        li.innerHTML = "From: " + oldPosition + " To: " + currentPosition + " Range: " + K;
    } else {
        li.innerHTML = "From: " + undoPosition + " To: " + currentPosition + " Range: " + (undoPosition - currentPosition);
    }
    cellList.appendChild(li);
}
