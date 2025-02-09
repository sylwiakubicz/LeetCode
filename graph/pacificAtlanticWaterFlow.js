
var pacificAtlantic = function(heights) {
    const ROWS = heights.length
    const COLS = heights[0].length
    const DIRECTIONS = [[1,0], [-1,0], [0,1], [0,-1]]

    let pac = Array.from({length: ROWS}, () => Array(COLS).fill(false))
    let atl = Array.from({length: ROWS}, () => Array(COLS).fill(false))
    let res = []

    const dfs = (r, c, ocean) => {
        ocean[r][c] = true

        for (let [dr, dc] of DIRECTIONS) {
            let row = r + dr
            let col = c + dc
            if (row >= 0 && col >= 0 && row < ROWS && col < COLS && !ocean[row][col] && heights[row][col] >= heights[r][c]) {
                dfs(row, col, ocean)
            }
        }
    }

    for (let r = 0; r < ROWS; r++) {
        dfs(r, COLS - 1, atl)
        dfs(r, 0, pac)
    }
    for (let c = 0; c < COLS; c++) {
        dfs(ROWS - 1, c, atl)
        dfs(0, c, pac)
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (pac[r][c] && atl[r][c]) {
                res.push([r, c])
            }
        }
    }

    return res
};
