
let board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
let boardValid = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

var isValidSudoku = function(board) {


    for (let i = 0; i < 9; i++) {
        let row = new Set()
        let column = new Set()
        let box = new Set()

        for (let j = 0; j < 9; j++) {
            
            if (board[i][j] != ".") {
                if (row.has(board[i][j])) return false
                row.add(board[i][j])
            }
            
            if (board[j][i] != ".") {
                if (column.has(board[j][i])) return false
                column.add(board[j][i])
            }

            let boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let boxCol = 3 * (i % 3) + (j % 3);
            if (board[boxRow][boxCol] != ".") {
                if (box.has(board[boxRow][boxCol])) return false
                box.add(board[boxRow][boxCol])
            }
        }
    }
    return true
};

// trochę bardziej zoptymalizowany bez zagnieżdżannia ifów
var isValidSudoku = function(board) {


    for (let i = 0; i < 9; i++) {
        let row = new Set()
        let column = new Set()
        let box = new Set()

        for (let j = 0; j < 9; j++) {
            
            if (board[i][j] != "." && row.has(board[i][j])) return false
            row.add(board[i][j])
            
            
            if (board[j][i] != "." && column.has(board[j][i])) return false
            column.add(board[j][i])
            

            let boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let boxCol = 3 * (i % 3) + (j % 3);
            if (board[boxRow][boxCol] != "." && box.has(board[boxRow][boxCol])) return false
            box.add(board[boxRow][boxCol])
        }
    }
    return true
};
