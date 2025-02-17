// dp, przeszło testy ale tylko 24% pokonuje
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const ROWS = obstacleGrid.length
    const COLS = obstacleGrid[0].length
    if (obstacleGrid[0][0] === 1 || obstacleGrid[ROWS - 1][COLS - 1] === 1) return 0

    let dp = Array.from({length: ROWS + 1}, () => Array(COLS + 1).fill(0))
    dp[ROWS - 1][COLS - 1] = 1

    for (let i = ROWS - 1; i >= 0; i--) {
        for (let j = COLS -1; j >= 0; j--) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] += dp[i + 1][j]  
                dp[i][j] += dp[i][j + 1] 
            }            
        }
    }

    return dp[0][0]
};

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
