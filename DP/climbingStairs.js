/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = new Array(n).fill(0)

    result[1] = 1
    result[2] = 2
    for (let i = 3; i <= n; i++) {
        result[i] = result[i - 2] + result[i - 1]
    }

    return result[n]
};
