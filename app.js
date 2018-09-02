let cells = document.querySelectorAll('.cell');
let messageBox = document.querySelector('.messagebox');

var gameOver= false;

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkPlayerTurn(squares) {
    let num_x = 0;
    let num_o = 0;
    for (i = 0; i < squares.length; i++) {
        if (squares[i].textContent == 'X') {
            num_x ++
        }   else if (squares[i].textContent == 'O') {
            num_o ++
        }
    }
    if (num_x == num_o) {
        return 'X';
    }   else {
        return 'O';
    }
}

function checkWinConditions() {
    
    for (i=0; i < winConditions.length; i++) {
        oFreq = 0;
        xFreq = 0;
        for (j=0; j < winConditions[i].length; j++) {
            if (cells[winConditions[i][j]].textContent == 'X') {
                xFreq++;
            } else if (cells[winConditions[i][j]].textContent == 'O') {
                oFreq++;
            }
        }

        if (xFreq == 3) {
            messageBox.textContent = "X wins!";
            return true;
        }   else if (oFreq == 3) {
            messageBox.textContent = "O Wins!";
            return true;
        }  else {

        }
    }
    return false;
}

function checkForTie() {
    let cellsPopulated = 0;
    for (x = 0; x < cells.length; x++) {
        if (cells[x].textContent == 'X' || cells[x].textContent == 'O') {
            cellsPopulated++;
            console.log("Cells Populated:" + cellsPopulated);
        }
    }

    if (cellsPopulated == 9) {
        messageBox.textContent = "It's a tie!";
        return true;
    } else {
        return false;
    } 
}

function clearBoard() {
    for (i=0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}

function cellClicked(e) {
    if (gameOver == true) {
        clearBoard();
        gameOver = false;
        messageBox.textContent = " ";
        return;
    }
    let squareInputValue = checkPlayerTurn(cells);
    if (e.target.textContent != '') {
        messageBox.textContent = "That square is already taken!";
    } else {
        e.target.textContent = squareInputValue;
        messageBox.textContent = "";
    }

    console.log(gameOver);

    gameOver = checkWinConditions();
    if (gameOver == false) {
        gameOver = checkForTie();
    }
    console.log(gameOver);
    
}