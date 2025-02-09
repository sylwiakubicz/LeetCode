class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const DIRECTIONS = [[1,0], [-1,0], [0,1], [0,-1]]
        const ROWS = grid.length
        const COLS = grid[0].length

        let gates = []
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    gates.push([r,c])
                }
            }
        }

        let len = 0
        while (gates.length > 0) {
            len++
            let size = gates.length
            for (let i = 0; i < size; i++) {
                const [row, col] = gates.shift()

                for (let [dr, dc] of DIRECTIONS) {
                    let r = dr + row
                    let c = dc + col
                    if (r >= 0 && c >= 0 && r < ROWS && c < COLS && grid[r][c] === 2147483647) {
                        grid[r][c] = len
                        gates.push([r,c])
                    }
                }
            }
        }
        
    }
}

