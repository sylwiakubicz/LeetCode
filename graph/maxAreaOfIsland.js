// BFS
var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length
    const COLS = grid[0].length
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    
    let maxArea = 0

    const bfs = (r,c) => {
        let q = []
        q.push([r,c])
        grid[r][c] = 0
        let counter = 0

        while (q.length > 0) {
            const [row, col] = q.shift()
            counter++

            for (let [dr, dc] of DIRECTIONS) {
                let r = row + dr
                let c = col + dc
                if (r >= 0 && r < ROWS && c >= 0 && c < COLS && grid[r][c] === 1) {
                    q.push([r,c])
                    grid[r][c] = 0
                }
            }
        }
        
        maxArea = Math.max(maxArea, counter)
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                bfs(r,c)
            }
        }
    }

    return maxArea
};
