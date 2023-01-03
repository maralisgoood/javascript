// let board = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let root = document.getElementById("root");

function getGenerateFields(board) {
    for (i = 0; i < board.length; i++) {
        for (j = 0; j < board[i].length; j++) {
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "field");
            if (board[i][j] !== 0) {
                newDiv.innerText = board[i][j];
            }
            root.appendChild(newDiv);
        }
    }
}

