// działa poprawnie ale jest mało optymalne i nie przechodzi testów przez timelimit exceeded
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const DIRECTIONS = [[0, 1], [1, 0]]
    const ROWS = obstacleGrid.length
    const COLS = obstacleGrid[0].length

    let res = 0
    let q = []
    if (obstacleGrid[0][0] === 1) {
        return 0
    }
    q.push([0,0])

    while (q.length > 0) {
        let [r, c] = q.shift()
        if (r === ROWS - 1 && c === COLS - 1 && obstacleGrid[r][c] !== 1) {
            res++ 
            continue
        }
        
        for (let [dr, dc] of DIRECTIONS) {
            if (r + dr < ROWS && c + dc < COLS && obstacleGrid[r + dr][c + dc] !== 1) {
                q.push([r + dr, c + dc])
            }
        }
    }

    return res
};
