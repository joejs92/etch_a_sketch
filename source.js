let userInput = 16;
let gridSize = userInput;

function createGrid(gridSize) {
    while (gridSize > 0){
        const row = document.createElement('div');
        row.id = "row";
        let width = userInput;
        while (width > 0){
            const column = document.createElement('div');
            column.id = "grid";
            row.appendChild(column);
            width --;
        }
        bottomContainer.appendChild(row);
        gridSize --;
    }
}

createGrid(gridSize);