/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length 
    let total = new Array(n)
    total[n] = 0
    total[n - 1] = Math.min(cost[n - 1], cost[n - 2])

    for (let i = n - 2; i >= 0; i--){
        total[i] = cost[i] + Math.min(total[i + 1], total[i + 2])
    }

    return Math.min(total[0], total[1])
};
