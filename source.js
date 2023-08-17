let userInput = 16;
let gridSize = userInput;

function createGrid(gridSize) {
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
}

function changeColor(){
    let thisID = this.id;
    let change = document.getElementById(thisID);
    change.style.backgroundColor = "black";
}

createGrid(gridSize);

let btns = document.querySelectorAll('.grid');
for (let i=0; i< btns.length; i++) {
    btns[i].addEventListener('mouseover',changeColor);
}