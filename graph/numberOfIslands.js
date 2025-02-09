// BFS

var numIslands = function(grid) {
    const ROWS = grid.length
    const COLS = grid[0].length
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let land = 0

    const bfs = (r, c) => {
        let q = []
        q.push([r,c])
        grid[r][c] = "0"

        while (q.length > 0) {
            const [row, col] = q.shift()

            for (let dir of DIRECTIONS) {
                let r = row + dir[0]
                let c = col + dir[1]
                if (r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c] === "1") {
                    q.push([r,c])
                    grid[r][c] = "0"
                }
            }
        }
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === "1" ) {
                bfs(r,c)
                land++
            }
        }
    }

    return land
};



