document.addEventListener('DOMContentLoaded', (event) => {

    let win = false;
    let displayText = document.getElementById("status");
    let reset = document.querySelector(".btn");
    let turn = 1;
    var tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var gameboard = document.getElementById("board").children;
    for (let i = 0; i < gameboard.length; i++) {

        const element = gameboard[i];
        element.setAttribute("class", "square");


        //mouseover
        element.addEventListener("mouseover", function() {
            element.classList.add("hover");
        });

        element.addEventListener("mouseout", function() {
            element.classList.remove("hover");
        });

        //click
        element.addEventListener("click", function() {
            if (!element.textContent && win == false) {

                if (turn % 2 == 0) {
                    element.textContent = "O";
                    element.classList.add("square", "O");
                    tileArray[i] = "O";
                    displayText.textContent = ('It\'s "X\'s" turn.');

                } else {
                    element.textContent = "X";
                    element.classList.add("square", "X");
                    tileArray[i] = "X";
                    displayText.textContent = ('It\'s "O\'s" turn.');
                }
                win = checkWinner(displayText, tileArray);
                turn++;
            }


        });

        reset.addEventListener("click", function() {
            element.textContent = "";
            element.classList.remove("O");
            element.classList.remove("X");
            element.textContent = "";
            turn = 1;
            tileArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
            win = false;
        });
    }




});

function checkWinner(displayText, tileArray) {
    let winTiles = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winTiles.length; i++) {
        let winRow = winTiles[i];
        let move1 = winRow[0];
        let move2 = winRow[1];
        let move3 = winRow[2];

        if (tileArray[move1] == tileArray[move2] && tileArray[move2] == tileArray[move3]) {
            displayText.textContent = ('Congratulations! ' + tileArray[move1] + ' is the Winner!');
            return true;
        }
    }

    return false;

}