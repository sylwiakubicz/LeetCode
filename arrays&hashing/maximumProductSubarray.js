/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = Math.max(...nums)
    let min = 1
    let max = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max = 1
            min = 1
            continue
        }

        let tmp = max
        max =  Math.max(max * nums[i], min * nums[i], nums[i])
        min = Math.min(tmp * nums[i], min * nums[i], nums[i])
        res = Math.max(res, max)
    }

    return res
};
