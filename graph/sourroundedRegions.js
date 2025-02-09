// zamiana bezpośrednio w grafie
var solve = function(board) {
    const ROWS = board.length
    const COLS = board[0].length
    const DIRECTIONS = [[1,0], [-1,0], [0,1], [0,-1]]


    // dodanie wszytskich połączonych "O" 
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== "O") {
            return
        }

        board[r][c] = "T"
        for (let [dr,dc] of DIRECTIONS) {
            let row = r + dr
            let col = c + dc
            dfs(row, col)
        }
    }

    // zebranie wszytskich "O" z krawędzi
    for (let r = 0; r < ROWS; r++) {
        if (board[r][0] === "O") {
            dfs(r, 0)
        } 
        if (board[r][COLS - 1] === "O") {
            dfs(r, COLS - 1)
        }
    }
    for (let c = 0; c < COLS; c++) {
        if (board[ROWS - 1][c] === "O") {
            dfs(ROWS - 1, c)
        }
        if (board[0][c] === "O") {
            dfs(0, c)
        }
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X"
            } else if (board[r][c] === "T") {
                board[r][c] = "O"
            }
        }
    }
};
