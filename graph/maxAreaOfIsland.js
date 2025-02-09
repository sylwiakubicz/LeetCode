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

// DFS

    var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length
    const COLS = grid[0].length
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    
    let maxArea = 0
    let counter = 0

    const dfs = (r,c) => {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) return

        grid[r][c] = 0
        counter++
        for (let [dr, dc] of DIRECTIONS) {
            dfs(r + dr, c + dc)
        }
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                counter = 0
                dfs(r,c)
                maxArea = Math.max(maxArea, counter)
            }
        }
    }

    return maxArea
};

