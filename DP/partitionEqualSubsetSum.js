
var canPartition = function(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // If the total sum is odd, it's impossible to split into two equal subsets
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // Base case: A sum of 0 is always possible

    for (const num of nums) {
        for (let sum = target; sum >= num; sum--) {
            dp[sum] = dp[sum] || dp[sum - num];

            if(sum === target && dp[sum])
                return true
        }
    }

    return dp[target];
};



// druga opcja
let sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) {
            return false;
        }
        const target = sum / 2;
        const n = nums.length;

        const dp = Array.from(Array(n + 1), () => 
                   Array(target + 1).fill(false));

        for (let i = 0; i <= n; i++) {
            dp[i][0] = true; 
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= target; j++) {
                if (nums[i - 1] <= j) {
                    dp[i][j] = dp[i - 1][j] || 
                               dp[i - 1][j - nums[i - 1]];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp[n][target]; 
