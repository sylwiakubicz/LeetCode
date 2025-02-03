var minSubArrayLen = function(target, nums) {
    if (nums.length === 0) return 0
    
    let res = Number.POSITIVE_INFINITY
    let left = 0
    let right = 0
    let currentSum = nums[0]
    while (right < nums.length) {
        if (currentSum >= target) {
            res = Math.min(res, right - left + 1)
            currentSum -= nums[left]
            left++
        } else {
            right++
            currentSum += nums[right]
        }
    }

    return res === Number.POSITIVE_INFINITY ? 0 : res
};
