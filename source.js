let userInput = 16;
let gridSize = userInput;

function createGrid(gridSize) {
    let btns2 = document.querySelectorAll('.grid');
        for (let i=0; i< btns2.length; i++) {
            btns2[i].remove();
        }
    let btns1 = document.querySelectorAll('.row');
        for (let i=0; i< btns1.length; i++) {
            btns1[i].remove();
        }
    while (gridSize > 0){
        const row = document.createElement('div');
        row.className = "row";
        let width = userInput;
        while (width > 0){
            const column = document.createElement('div');
            column.className = "grid";
            column.id = `grid${gridSize}${width}`;
            row.appendChild(column);
            width --;
        }
        bottomContainer.appendChild(row);
        gridSize --;
    }
    let btns = document.querySelectorAll('.grid');
    for (let i=0; i< btns.length; i++) {
        btns[i].addEventListener('mouseover',changeColor);
    }
}

function changeColor(){
    let thisID = this.id;
    let change = document.getElementById(thisID);
    change.style.backgroundColor = "black";
}

function reset(){
    let size = prompt("Please enter a grid size.");
    if (isNaN(size) == true|| size <= 0 || size == "" || size > 100) {
        let btns2 = document.querySelectorAll('.grid');
        for (let i=0; i< btns2.length; i++) {
            btns2[i].remove();
        }
        let btns1 = document.querySelectorAll('.row');
        for (let i=0; i< btns1.length; i++) {
            btns1[i].remove();
        }
        alert("Try again, and please enter a Number between 1 and 100 inclusive.");
        reset();
    }
    else {
        userInput = size;
        let gridSize = userInput;
        createGrid(gridSize);
        console.log("Clicked")
    }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click",reset);




