var exist = function(board, word) {
    const ROWS = board.length
    const COLS = board[0].length

    const visited = new Set()
    
    const dfs = (r, c, i) => {
        if (i === word.length) {
                return true
        }

        if (r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c] !== word[i] || board[r][c] === '#') {
            return false
        }

        let temp = board[r][c]
        board[r][c] = '#';
        const res = dfs(r + 1, c, i + 1) || dfs(r - 1, c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1)
        board[r][c] = temp;
        return res
    }


    for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
            }
    }
    return false;
};
